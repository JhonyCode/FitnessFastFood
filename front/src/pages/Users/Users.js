import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./imagenusuario.module.css";
import React, { useContext } from "react";
export function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http:///localhost:42267/admin/usuario/admin",
    {
      method: "GET",
      headers: {
        Authorization : 'Bearer ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
  }})
      .then((res) => res.json())
      .then((data) => setUsers(data.result));
      
  }, []);
  return (
    <div className={styles.userlist}>
      {users.map((user) => {
        return (
          <div>
          <ul key={user.id}>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
            <p>Publicaciones: {user.publicaciones}</p>
            <p>{user.rol}</p>
            <img src={`../images/${user.perfil}`} />
            <div>
              <Link className={styles.links} to={`admin/usuarios/${user.id}`}>Ver detalle</Link>
            </div>
          </ul>
          </div>
        );
      })}
    </div>
  );
}
