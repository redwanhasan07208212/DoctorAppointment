/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);

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

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {appointments.slice(0, 3).map((item, index) => (
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
              <button>Pay Online</button>
              <button className="hover:bg-red-600">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
