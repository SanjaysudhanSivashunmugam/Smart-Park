const fetchSensorData = async () => {
  try {
    const response = await fetch('https://smartparking-mini-project.netlify.app/.netlify/functions/updateparking', {
      method: 'POST', // Ensure the request method is POST
      headers: {
        'Content-Type': 'application/json', // Specify that we're sending JSON data
      },
      body: JSON.stringify(sensorData), // Pass the data as JSON
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    setSensorData(data);
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
};
