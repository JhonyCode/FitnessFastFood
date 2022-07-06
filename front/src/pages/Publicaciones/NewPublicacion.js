import { useState, useEffect } from "react";
import swal from "sweetalert";
import styles from "./Register.module.css"
import { Link } from "react-router-dom";

export function NewPublicacion(){

    const [formValues, setFormValues] = useState({
        titulo: "",
        resumen: "",
        imagen: "",
        ingredientes:"",
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
        formData.append("imagen", e.target.imagen.files[0]);
    
        console.log(formData);
    
        fetch("http://localhost:42267/admin/publicaciones/new", {
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
          });
    
      };
    return(
<div className={styles.reg}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
          <label className={styles.labels} htmlFor="titulo">
            Titulo de la publicación
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
            Ingredientes
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
           Elaboración
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
        <label className={styles.labels} htmlFor="imagen">
            Imagen de la publicación
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
            Crear publicación
          </button>
        </form>
      </div>
    )
}