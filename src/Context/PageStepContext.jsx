import { createContext, useEffect, useState } from "react";

export const PageStepContext = createContext();

export const PageStepContextProvider = ({children}) => {
    const [pageStep, setPageStep] = useState(0);

    useEffect(() => {
        if(window.innerWidth < 500){
            setPageStep(1);
        }else{
            setPageStep(0);
        }
    }, []);

    return (
        <PageStepContext.Provider value={{ pageStep, updatePageStep: setPageStep }}>
            {children}
        </PageStepContext.Provider>
    );
}