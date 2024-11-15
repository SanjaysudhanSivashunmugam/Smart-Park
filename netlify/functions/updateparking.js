exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
    }
  
    try {
      const data = JSON.parse(event.body);
      console.log('Received data:', data);
  
      // You can process the data here (e.g., save it to a database or trigger an event)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data received successfully' }),
      };
    } catch (error) {
      console.error('Error processing data:', error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error processing data' }),
      };
    }
  };

// const fetchSensorData = async () => {
//   try {
//     const response = await fetch('https://smartparking-mini-project.netlify.app/.netlify/functions/updateparking', {
//       // method: 'POST', // Ensure the request method is POST
//       headers: {
//         'Content-Type': 'application/json', // Specify that we're sending JSON data
//       },
//       body: JSON.stringify(sensorData), // Pass the data as JSON
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     setSensorData(data);
//   } catch (error) {
//     console.error('Error fetching sensor data:', error);
//   }
// };
