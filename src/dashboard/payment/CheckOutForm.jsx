import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  // send payment amount to the server side.
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0)
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
  }, [axiosSecure, totalPrice]);
  // cart form handling
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment method
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const paymentInfo = {
          email: user.email,
          transactionID: paymentIntent.id,
          price: totalPrice,
          date: new Date(), // utc date convert.
          cartIds: cart.map((item) => item._id),
          menuItems: cart.map((item) => item.menuId),
          status: "pending",
        };
        // data will go to DB
        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log(res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire(`${user?.displayName} 's payment is done.`);
        }
        navigate("/dashboard/paymentDetails");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#704842",
              "::placeholder": {
                color: "#704842",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-2xl text-red-600">{error}</p>
      {transactionId && <p>Your transaction ID: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
