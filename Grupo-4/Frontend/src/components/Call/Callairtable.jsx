import { useEffect, useState } from 'react';
import { fetchData } from '../services/airtable';

const Callairtable = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchData().then((data) => setRecords(data));
    }, []);

    return (
        <div>
            {records.map((record) => (
                <div key={record.id}>
                    <p>{record.fields.Name}</p>
                </div>
            ))}
        </div>
    );
};

export default Callairtable;
