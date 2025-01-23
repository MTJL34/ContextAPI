import { createContext, useReducer } from "react";
import { postReducer, initialState } from "../reducer/postReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};