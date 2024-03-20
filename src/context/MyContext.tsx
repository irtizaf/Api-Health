"use client"
import { useState, createContext, useContext } from "react";


const initial_context:{value:number} = {value:0}

export const ArrivalWindowContext = createContext<any>(null);

export type data = {
    [x: string]: string
};

export default function ArrivalWindowContextProvider({ children }: any) {
  const [value, setValue] = useState<any>(initial_context);
  const [openIndex, setOpenIndex] = useState<boolean | null >(null);
  const [apiError, setApiError] = useState<boolean | null> (null);
  const [handleborder, setHandlebordser] = useState<boolean | null> (false);
  

    return (
        <ArrivalWindowContext.Provider value={{
          value, setValue,
          openIndex, setOpenIndex,
          apiError, setApiError,
          handleborder, setHandlebordser
        }}>
            {children}
        </ArrivalWindowContext.Provider>
    );
}

export const useWindowContext = () => useContext(ArrivalWindowContext);