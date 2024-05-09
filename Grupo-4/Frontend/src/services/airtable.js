
const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_API_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;
const fetchConfig = {
  headers: new Headers({
    'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  })
};

export const fetchData = async () => {
  let offset = null;
  let allRecords = [];

  try {
    do {
      const response = await fetch(`${API_URL}?offset=${offset}`, { headers: fetchConfig.headers });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      allRecords = [...allRecords, ...data.records];

      offset = data.offset;
    } while (offset);

    console.log(allRecords);
    return allRecords;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

fetchData();