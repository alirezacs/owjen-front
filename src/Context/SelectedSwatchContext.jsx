import { createContext, useState } from "react";

export const SelectedSwatchContext = createContext();

export const SelectedSwatchContextProvider = ({children}) => {
    const [selectedSwatch, setSelectedSwatch] = useState({
        models: []
    });

    return (
        <SelectedSwatchContext.Provider value={{selectedSwatch, updateSelectedSwatch: setSelectedSwatch}}>
            {children}
        </SelectedSwatchContext.Provider>
    );
}