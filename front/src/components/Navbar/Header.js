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
                Home
              </Link>
              <Link onClick={() => showSwitch()} to="/about">
                About us
              </Link>
              <Link onClick={() => showSwitch()} to="/posts">
                Recipes
              </Link>
              <Link onClick={() => showSwitch()} to="/contact">
                Contact
              </Link>
              <Link onClick={() => showSwitch()} to="/login">
                Login/Register
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
                Home
              </Link>
              <Link onClick={() => showSwitch()} to="/posts">
                Recipes
              </Link>
              <Link onClick={() => showSwitch()} to="/about">
               About us
              </Link>
              <Link onClick={() => showSwitch()} to="/contact">
                Contact
              </Link>
              <Link onClick={() => showSwitch()} to="/newpost">
                Create post
              </Link>
              <Link onClick={() => showSwitch()} to="/dashboard">My dashboard</Link>

              <Link onClick={() => logout()} to="/login">
                Exit
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
