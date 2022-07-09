import { createContext, useEffect, useState } from "react";
// Creamos la funcion Authcontext para guardar el token generado por el usuario,
// y así poder comprobarlo cuando queramos desde los fetch.
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
