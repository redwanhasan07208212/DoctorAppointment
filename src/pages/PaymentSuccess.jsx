import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Add query param to trigger refresh
    navigate("/my-appointments?from-payment=true");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-green-500 text-2xl font-bold">Payment Successful!</h1>
      <p>Your appointment is confirmed.</p>
      <button
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleNavigate}
      >
        Go to Appointments
      </button>
    </div>
  );
};

export default PaymentSuccess;
