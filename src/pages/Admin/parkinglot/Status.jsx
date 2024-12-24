import React from "react";
import { useGetParkingSlotsQuery } from "../../../service/parkingApi";

const ParkingStatus = () => {
  const { data, error, isLoading } = useGetParkingSlotsQuery();
  
  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading parking status.</p>;
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Parking Lot Status</h1>
      <div className="grid grid-cols-5 gap-4">
        {data && data.data.length > 0 ? (
          data.data.map((slot) => (
            <div
              key={slot.id}
              className={`${
                JSON.parse(localStorage.getItem("slot_ids"))?.includes(slot.id.toString())
                  ? "bg-red-300 cursor-block"
                  : "bg-green-300"
              } w-24 h-24 flex items-center justify-center text-white font-bold rounded-md`}
            >
              <span className="text-sm">
                Slot {slot.id}
                {JSON.parse(localStorage.getItem("slot_ids"))?.includes(slot.id.toString())
                 }
              </span>
            </div>
          ))
        ) : (
          <p className="text-center col-span-5">No parking slots available</p>
        )}
      </div>
    </div>
  );
};

export default ParkingStatus;
