// function Seat({ seats, bookseat }) {
//     return (
//         <div className="grid grid-cols-5 gap-4">
//             {seats.map((seat) => (
//                 <div
//                     key={seat.id}
//                     className={`w-24 h-24 rounded-lg cursor-pointer ${seat.isBooked ? 'bg-red-400' : 'bg-green-400'}`}
//                     // onClick={() => bookseat(seat.id)}

//                 >
//                     <a>
//                         <img
//                             src={seat.image}
//                             alt={`Seat ${seat.id}`}
//                             className={`w-full h-full rounded-lg ${seat.isBooked ? 'opacity-50' : ''}`}
//                         />
//                     </a>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Seat;
import React, { useState, useEffect } from 'react';

function Seat() {
  const [sensorData, setSensorData] = useState({ sensor1: 0, sensor2: 0, sensor3: 0 });

  // Function to fetch sensor data from the Node.js server
  const fetchSensorData = async () => {
    try {
      const response = await fetch('http://192.168.157.76:3000/update-parking'); // Replace with your server IP if needed
      const data = await response.json();
      setSensorData(data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  // Fetch sensor data every 2 seconds
  useEffect(() => {
    const interval = setInterval(fetchSensorData, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div
        className={`w-24 h-24 rounded-lg flex justify-center  ${!sensorData.sensor1 ? 'bg-red-400' : 'bg-green-400'}`}
      >
        <div className='pt-9'> Seat 1</div>
      </div>
      <div
        className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor2 ? 'bg-red-400' : 'bg-green-400'}`}
      >
        <div className='pt-9'> Seat 2</div>
      </div>
      <div
        className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor3 ? 'bg-red-400' : 'bg-green-400'}`}
      >
        <div className='pt-9'> Seat 3</div>
      </div>
    </div>
  );
}

export default Seat;

