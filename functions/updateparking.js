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