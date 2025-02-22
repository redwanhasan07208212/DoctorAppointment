import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-2xl font-bold">Payment Failed!</h1>
      <p>Please try again or contact support.</p>
      <button
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => navigate("/my-appointments")}
      >
        Go to Appointments
      </button>
    </div>
  );
};

export default PaymentFailed;
