interface QuoteResponse {
  q: string;
  a: string;
  h: string;
}

export const handler = async () => { 
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data: QuoteResponse[] = await response.json(); 

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