import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

/**
 * Socket context
 */
export const SocketContext = createContext();
/**
 * Provider to use socket context
 */
export const SocketProvider = ({ children }) => {
    const { socket, isOnline } = useSocket('http://localhost:8080'); 
    return (
        <SocketContext.Provider value={{ socket, isOnline }}>
            {children}
        </SocketContext.Provider>
    )
}