import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useEffect } from "react";
const Navbar = () => {
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("http:///localhost:8080/admin/usuario")
      .then((res) => res.json())
      .then((data) => setUser(data.result));
  }, []);
  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
  function showSwitch() {
    return setShow(!show);
  }
  return (
    <div>
      {!token ? (
        <>
          <div className="navbar">
            <div className="logo">Fitness Fast Food</div>
            <div className={show ? "links active" : "links"}>
              <Link onClick={() => showSwitch()} to="/">
                Inicio
              </Link>
              <Link onClick={() => showSwitch()} to="/about">
                Sobre nosotros
              </Link>
              <Link onClick={() => showSwitch()} to="/publicaciones">
                Publicaciones
              </Link>
              <Link onClick={() => showSwitch()} to="/contacto">
                Contacto
              </Link>
              <Link onClick={() => showSwitch()} to="/login">
                Login/Registro
              </Link>
            </div>
            <div
              onClick={() => showSwitch()}
              className={show ? "bars-button active" : "bars-button"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar">
            <div className="logo">Fitness Fast Food</div>
            <div className={show ? "links active" : "links"}>
              <Link onClick={() => showSwitch()} to="/">
                Inicio
              </Link>
              <Link onClick={() => showSwitch()} to="/publicaciones">
                Publicaciones
              </Link>
              <Link onClick={() => showSwitch()} to="/about">
                Sobre nosotros
              </Link>
              <Link onClick={() => showSwitch()} to="/contacto">
                Contacto
              </Link>
              <Link to="/dashboard">Panel de control</Link>
              {/* <Link  to={`/usuarios/${user.id}`}>dashboard</Link> */}
              <Link onClick={() => logout()} to="/login">
                Salir
              </Link>
            </div>
            <div
              onClick={() => showSwitch()}
              className={show ? "bars-button active" : "bars-button"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

// Los span son para el responsive, que se vean 3 rayitas
// blancas para desplegar el menu de navegación
// onclick ShowSwitch para el responsive también.
