const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch quote' }),
    };
  }
};