import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProviderComponent = ({ children }) => {
    const [user, setUser] = useState(false);
    const [cards, setCards] = useState([]);

    const addCard = (cardArray) => {
        setCards(cardArray);
    };

    const removeCard = (cardArray) => {
        setCards(cardArray);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                addCard,
                removeCard,
                cards,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const DataContext = createContext();

export const DataContextProviderComponent = ({ children }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState();
    const [offset, setOffset] = useState(null);

    const fetchAirtableData = async (currentOffset) => {
        let url =
            'https://api.airtable.com/v0/appMtJQGP8M2O4Xxf/datos_bancarios?maxRecords=100&view=Grid%20view';
        if (currentOffset) {
            url += `&offset=${encodeURIComponent(currentOffset)}`;
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization:
                    'Bearer patpHvtCbjTGWMFmy.cfe43cb0f702160fd8bfa50da71dc4841a187fdc532ce50059a420aafa960b2f',
            },
        });
        const responseData = await response.json();
        const records = responseData.records;
        const nextOffset = responseData.offset;

        console.log(records);

        setData((prevData) => [...prevData, ...records]);

        if (nextOffset) {
            setOffset(nextOffset);
            await fetchAirtableData(nextOffset);
        }
    };
    useEffect(() => {
        fetchAirtableData(offset);
    }, [offset]);

    return (
        <DataContext.Provider
            value={{
                data,
                filter,
                setFilter,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
