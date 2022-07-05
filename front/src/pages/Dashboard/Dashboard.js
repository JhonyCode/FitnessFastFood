import { useEffect, useState } from "react";
import styles from "../Users/imagenusuario.module.css";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
export function Dashboard() {
  const [user, setUser] = useState();
  const { token } = useContext(AuthContext);
  localStorage.setItem("token", token);
  localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:8080/admin/usuario/get",{
      headers: {
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((res) => res.json())
      .then((data) => setUser(data.result));
  }, []);
  console.log(token);
  return (
    <div className={styles.userlist1}>
      {user ? (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Publicaciones :{user.publicaciones}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
