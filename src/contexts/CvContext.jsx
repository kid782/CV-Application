import { createContext, useReducer, useContext } from "react";
import { initState, formsReducer } from "../components/reducerFunctions";

export const CvStateContext = createContext(null);
export const CvDispatchContext = createContext(null);

export function CvProvider({ children }) {
  const [formsInfo, dispatch] = useReducer(formsReducer, initState);
  return (
    <CvStateContext.Provider value={formsInfo}>
      <CvDispatchContext.Provider value={dispatch}>
        {children}
      </CvDispatchContext.Provider>
    </CvStateContext.Provider>
  );
}

export function useCvDispatch() {
  return useContext(CvDispatchContext);
}

export function useCvStateContext() {
  return useContext(CvStateContext);
}
