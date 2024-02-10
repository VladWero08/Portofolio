import React, { createContext, useContext, useState } from 'react';

// create a context to hold and provide
// cookie-related state and functions
const CookieContext = createContext();

// create a provide component that will wrap
// the application and manage the cookie state
export const CookieProvider = ({ children }) => {
    const [cookie, setCookie] = useState(null);

    const setCookieValue = (cookie) => {
        setCookie(cookie);
    };

    return (
        <CookieContext.Provider value={{ cookie, setCookieValue }}>
            {children}
        </CookieContext.Provider>
    );
};

export const useCookie = () => useContext(CookieContext);
