import { useContext } from "react";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitles
        heading="Payment Details"
        subHeading="Your Transaction with card"
      ></SectionTitles>
      <h1>
        Total Payments:{" "}
        <span className="text-green-600">{payments.length}</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.price}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
