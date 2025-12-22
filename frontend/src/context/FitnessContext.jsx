import { createContext, useContext, useState } from "react";


const FitnessContext = createContext();

export const FitnessProvider = ({children}) => {
    const [logs, setLogs] = useState([]);

    const addLog = (log) => {
        setLogs((prev) => [...prev, log]);
    }

    return (
        <FitnessContext.Provider value={{logs, addLog}}>
            {children}
        </FitnessContext.Provider>
    )
}

export const useFitness = () => useContext(FitnessContext);
