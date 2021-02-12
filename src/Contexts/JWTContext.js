import React from 'react';

export const JWTContext = React.createContext({
    JWT: window.localStorage.JWT,
    changeJWT: () => {},
    saveJWT: (JWT) => {
        window.localStorage.JWT = JWT
    },
    removeJWT: () => {
        window.localStorage.clear()
    },
});