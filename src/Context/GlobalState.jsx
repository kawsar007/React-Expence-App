import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transections: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]
};



// Create Context
 export const GlobalContext = createContext(); 

 export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    
    function removeTransection (id) {
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }

    function addTransection (transaction) {
        dispatch({
            type: 'ADD_TRANSECTION',
            payload: transaction
        })
    }
 
    return (
    <GlobalContext.Provider value={{transections: state.transections, removeTransection, addTransection}}>
        {children}
    </GlobalContext.Provider>
    )
}

