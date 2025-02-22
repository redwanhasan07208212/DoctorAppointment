/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const months = [
    " ",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/list-appointment",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const cancelAppointment = async (appointmentId) => {
    try {
      console.log("Cancelling appointment:", appointmentId); // Debugging
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment", // Concatenate backendUrl and endpoint
        { appointmentId }, // Request body
        {
          headers: { Authorization: `Bearer ${token}` }, // Authorization header
        }
      );

      console.log("Backend Response:", data); // Debugging

      if (data.success) {
        toast.success(data.message);
        getUserAppointments(); // Refresh the appointments list
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const payForAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment/initiate",
        { appointmentId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        window.location.href = data.url;
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Payment error:", err);
      toast.error("Failed to initiate payment");
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
    // Check for payment redirect
    if (window.location.search.includes("from-payment=true")) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [token, window.location.search]);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {appointments.slice(0, 10).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={index}
          >
            <div>
              <img
                className="w-32 bg-indigo-50"
                src={item.docData.image}
                alt=""
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">
                {item.docData.name}
              </p>
              <p className="text-neutral-800 font-semibold">
                {item.docData.speciality}
              </p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-neutral-800 text-xs">
                {item.docData.address.line1}
              </p>
              <p className="text-neutral-800 text-xs">
                {item.docData.address.line2}
              </p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date&Time
                </span>
                <span> </span>
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-5">
              {!item.cancelled && item.payment && (
                <button className="sm:min-w-48 py-2 border text-stone-500 bg-indigo-50">
                  Paid
                </button>
              )}
              {!item.cancelled && !item.payment && (
                <button onClick={() => payForAppointment(item._id)}>
                  Pay Online
                </button>
              )}

              {!item.cancelled && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="hover:bg-red-600"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && (
                <button className="text-red-600 bg-slate-300">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
