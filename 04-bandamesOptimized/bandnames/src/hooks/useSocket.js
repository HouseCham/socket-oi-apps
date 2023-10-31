import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

export const useSocket = ( serverPath ) => {
    const [isOnline, setIsOnline] = useState(false);
    const socket = useMemo(() => io.connect( serverPath, {
        transports: ['websocket']
    }), [ serverPath ]);

    useEffect(() => {
        setIsOnline(socket.connected);
      }, [socket]);
    
      useEffect(() => {
        socket.on('connect', () => {
          setIsOnline(true);
        });
      }, [socket]);
    
      useEffect(() => {
        socket.on('disconnect', () => {
          setIsOnline(false);
        });
      }, [socket]);

      return {
        socket,
        isOnline
      }
};