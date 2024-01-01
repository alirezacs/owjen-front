import { Context, createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, updateLoading: setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}