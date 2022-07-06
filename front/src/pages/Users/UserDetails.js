import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./imagenusuario.module.css"
export function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:42267/admin/usuario/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.result));
  }, [id]);

  return (
    <div className={styles.userlist1}>
      {user ? (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Publicaciones :{user.publicacion}</p>
          <p>
            {user.id}
          </p>
          <p>
         {user.role}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
