import { useState, useEffect } from "react";
import swal from "sweetalert";
import styles from "./Register.module.css"
import { useNavigate, Navigate } from "react-router-dom";
export function NewPost(){
  const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        titulo: "",
        resumen: "",
        imagen: "",
        ingredientes:"",
        comentario:""
      });
    const handleInputChange = (e) => {
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("titulo", formValues.titulo);
        formData.append("resumen", formValues.resumen);
        formData.append("ingredientes", formValues.ingredientes);
        formData.append("comentario", formValues.comentario);
        formData.append("imagen", e.target.imagen.files[0]);
    
  
    
        fetch("http://localhost:8080/admin/publicaciones/new", {
          method: "POST",
          body: formData,
          headers: {
            enctype: "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((data) => {
            swal("Publicacion añadida correctamente");
            navigate("/userposts", { replace: true })
          });
    
      };
    return(
<div className={styles.reg}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
          <label className={styles.labels} htmlFor="titulo">
            Tittle
          </label>
          <input
            className={styles.user}
            required={true}
            id="titulo"
            name="titulo"
            type="text"
            onChange={handleInputChange}
            value={formValues.titulo}
          />
          <label className={styles.labels} htmlFor="ingredientes">
            Ingredients
          </label>
          <textarea
            className={styles.password}
            required={true}
            id="ingredientes"
            name="ingredientes"
            type="text"
            onChange={handleInputChange}
            values={formValues.ingredientes}
          />
          <label className={styles.labels} htmlFor="resumen">
           Elaboration
          </label>
          <textarea
            className={styles.password}
            required={true}
            id="resumen"
            name="resumen"
            type="text"
            onChange={handleInputChange}
            values={formValues.resumen}
          />
                    <label className={styles.labels} htmlFor="comentario">
                    Nutritional value
          </label>
          <textarea
            className={styles.password}
            required={true}
            id="comentario"
            name="comentario"
            type="text"
            onChange={handleInputChange}
            values={formValues.comentario}
          />
        <label className={styles.labels} htmlFor="imagen">
            Recipe image
          </label>
          <input
            className={styles.password}
            id="imagen"
            name="imagen"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
          
          <button className={styles.boton} type="submit">
            Create
          </button>
        </form>
      </div>
    )
}