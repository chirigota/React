import {createContext} from "react";


let categoryContext = createContext();

export const categoryProvider = categoryContext.Provider;
export const categoryConsumer = categoryContext.Consumer;
export default categoryContext;
