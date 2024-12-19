import React, { useEffect } from "react";
import { useGetParkingSlotsQuery } from "../../service/parkingApi";
import { Link } from "react-router-dom";

const ParkingLot = () => {
  const { data, error, isLoading, refetch } = useGetParkingSlotsQuery();
  console.log({data});
  
  console.log("error", data);

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  

  const handleSlotClick = (slotId) => {
   
    let currentSlots = JSON.parse(localStorage.getItem("slot_ids")) || [];

   
    if (!currentSlots.includes(slotId)) {
      currentSlots.push(slotId);
    }
    localStorage.setItem("slot_ids", JSON.stringify(currentSlots));
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Parking Lot Status</h1>
      <div className="grid grid-cols-5 gap-4">
        {data && data.data.length > 0 ? (
          data.data.map((slot) => (
            JSON.parse(localStorage.getItem("slot_ids"))?.includes(slot.id) ? (
              <div
                key={slot.id}
                className={`bg-red-300 w-24 h-24 flex items-center justify-center text-white font-bold rounded-md cursor-not-allowed`}
              >
                <span className="text-sm">Slot {slot.id}</span>
              </div>
            ) : (
              <Link to={`/park-vehicle/${slot.id}`} onClick={() => handleSlotClick(slot.id)}>
                <div
                  key={slot.id}
                  className={`bg-green-300 w-24 h-24 flex items-center justify-center text-white font-bold rounded-md`}
                >
                  <span className="text-sm">Slot {slot.id}</span>
                </div>
              </Link>
            )
          ))
        ) : (
          <p className="text-center col-span-5">No parking slots available</p>
        )}
      </div>
    </div>
  );
};

export default ParkingLot;
