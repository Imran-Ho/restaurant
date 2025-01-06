import { loadStripe } from "@stripe/stripe-js";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
//TODO: bring PK from stripe's website
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Payment_pk);
const Payment = () => {
  return (
    <div>
      <SectionTitles
        heading="Payment Section"
        subHeading="Place your payment"
      ></SectionTitles>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
