import {createContext} from "react";

let CategoryContext = createContext();

export const CategoryProvider = CategoryContext.Provider;
export const CategoryConsumer = CategoryContext.Consumer;
export default CategoryContext;
