const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    // Return the entire API response directly
    return {
      statusCode: 200,
      body: JSON.stringify(data), 
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      statusCode: 500, 
      body: JSON.stringify({ error: 'Failed to fetch quote' }),
    };
  }
};