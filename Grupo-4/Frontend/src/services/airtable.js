// const API_URL = `https://airtable.com/v0/${
//     import.meta.env.VITE_AIRTABLE_API_BASE_ID
// }/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;

const API_URL =
    'https://api.airtable.com/v0/appMtJQGP8M2O4Xxf/datos_bancarios/recUwNRL9UeO6x8lL';

const fetchConfig = {
    headers: new Headers({
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    }),
};

export const fetchData = async () => {
    console.log('hola');
    try {
        const response = await fetch(API_URL, { headers: fetchConfig.headers });
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.records;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
};
