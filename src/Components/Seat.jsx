// import React, { useState, useEffect } from 'react';

// function Seat() {
//   const [sensorData, setSensorData] = useState({ sensor1: 0, sensor2: 0, sensor3: 0 });
//   const fetchSensorData = async () => {
//     try {
//       const response = await fetch('https://smartparking-mini-project.netlify.app/.netlify/functions/updateparking');
//       const data = await response.json();
//       setSensorData(data);
//     } catch (error) {
//       console.error('Error fetching sensor data:', error);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(fetchSensorData, 1000);
//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 ">
//       <div
//         className={`w-24 h-24 rounded-lg flex justify-center  ${!sensorData.sensor1 ? 'bg-red-400' : 'bg-green-400'}`}
//       >
//         <div className='pt-9'> Seat 1</div>
//       </div>
//       <div
//         className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor2 ? 'bg-red-400' : 'bg-green-400'}`}
//       >
//         <div className='pt-9'> Seat 2</div>
//       </div>
//       <div
//         className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor3 ? 'bg-red-400' : 'bg-green-400'}`}
//       >
//         <div className='pt-9'> Seat 3</div>
//       </div>
//     </div>
//   );
// }

// export default Seat;
// this will work
// import React, { useState, useEffect } from 'react';

// function Seat() {
//   const [sensorData, setSensorData] = useState({ sensor1: 0, sensor2: 0, sensor3: 0 });

//   // Function to fetch sensor data from the Netlify function
//   const fetchSensorData = async () => {
//     try {
//       const response = await fetch('https://smartparking-mini-project.netlify.app/.netlify/functions/updateparking', {
//         method: 'POST', // Ensure the request method is POST
//         headers: {
//           'Content-Type': 'application/json', // Specify that we're sending JSON data
//         },
//         body: JSON.stringify(sensorData), // Pass the current sensor data as JSON
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       console.log('Received response:', data); // Log the response data
//       setSensorData(data); // Update state with the received data
//     } catch (error) {
//       console.error('Error fetching sensor data:', error);
//     }
//   };

//   // Use useEffect to call fetchSensorData every second
//   useEffect(() => {
//     const interval = setInterval(fetchSensorData, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor1 ? 'bg-red-400' : 'bg-green-400'}`}>
//         <div className="pt-9"> Seat 1</div>
//       </div>
//       <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor2 ? 'bg-red-400' : 'bg-green-400'}`}>
//         <div className="pt-9"> Seat 2</div>
//       </div>
//       <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor3 ? 'bg-red-400' : 'bg-green-400'}`}>
//         <div className="pt-9"> Seat 3</div>
//       </div>
//     </div>
//   );
// }

// export default Seat;



//
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function Seat() {
  const [sensorData, setSensorData] = useState({ sensor1: 0, sensor2: 0, sensor3: 0 });

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('sensorData')
      .doc('currentData')
      .onSnapshot((doc) => {
        if (doc.exists) {
          setSensorData(doc.data());
        }
      });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor1 ? 'bg-red-400' : 'bg-green-400'}`}>
        <div className="pt-9">Seat 1</div>
      </div>
      <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor2 ? 'bg-red-400' : 'bg-green-400'}`}>
        <div className="pt-9">Seat 2</div>
      </div>
      <div className={`w-24 h-24 rounded-lg flex justify-center ${!sensorData.sensor3 ? 'bg-red-400' : 'bg-green-400'}`}>
        <div className="pt-9">Seat 3</div>
      </div>
    </div>
  );
}

export default Seat;
