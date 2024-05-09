
const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_API_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;

const fetchConfig = {
  headers: new Headers({
    'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  })
};

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL, { headers: fetchConfig.headers }); 
   console.log( response, 'response');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log( data );
    return data;
    
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
