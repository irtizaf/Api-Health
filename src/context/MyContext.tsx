"use client"
import { useState, createContext, useContext } from "react";


const initial_context:{value:string} = {value:" "}

export const ArrivalWindowContext = createContext<any>(null);

export type data = {
    [x: string]: string
};

export default function ArrivalWindowContextProvider({ children }: any) {
  const [value, setValue] = useState<any>(initial_context);
  const [openIndex, setOpenIndex] = useState<boolean >(false);
  

    return (
        <ArrivalWindowContext.Provider value={{
          value, setValue,
          openIndex, setOpenIndex,
        }}>
            {children}
        </ArrivalWindowContext.Provider>
    );
}

export const useWindowContext = () => useContext(ArrivalWindowContext);