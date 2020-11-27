import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

type objectValues = {
    veticka:string
}

const hlavniState:objectValues = {
 veticka:"Uvítací větička",
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);
  const pridejPDFUrl = (url: string) => {
    dispatch({
      type: "PRIDEJ_URL",
      payload: url,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
       //Zde bude value
       veticka:state.veticka
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};