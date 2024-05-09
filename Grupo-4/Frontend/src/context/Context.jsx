import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProviderComponent = ({ children }) => {
    const [user, setUser] = useState(false);
    const [cards, setCards] = useState(['0021']);

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
