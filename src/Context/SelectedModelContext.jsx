import { createContext, useState } from "react";

export const SelectedModelContext = createContext();

export const SelectedModelContextProvider = ({children}) => {
    const [selectedModel, setSelectedModel] = useState("");

    return (
        <SelectedModelContext.Provider value={{ selectedModel, updateSelectedModel:setSelectedModel }}>
            {children}
        </SelectedModelContext.Provider>
    );
}