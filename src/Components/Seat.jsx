import React, { useState, useEffect } from 'react';

function Seat() {
  const [sensorData, setSensorData] = useState({ sensor1: 0, sensor2: 0, sensor3: 0 });
  const fetchSensorData = async () => {
    try {
      const response = await fetch('https://smartparking-mini-project.netlify.app/');
      const data = await response.json();
      setSensorData(data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchSensorData, 1000);
    return () => clearInterval(interval); 
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

