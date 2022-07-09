import { useState, useEffect } from "react";
import styles from "../Contact/Contact.module.css"
import swal from 'sweetalert';
import {useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
const EditPost = () => {
    const navigate = useNavigate();
  const params = useParams("");
  // Guardamos información del formulario
  const [formValues, setFormValues] = useState({
    titulo: "",
    ingredientes: "",
    comentario: "",
    resumen:""
  });

  const handleInputChange = (e) => {
    // Metemos información del formulario en la variable formValues
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Funcion para el submit, evitamos la funcion por defecto y le decimos que 
  // Coja la información recibida por formulario.
    const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("titulo", formValues.titulo);
    formData.append("ingredientes", formValues.ingredientes);
    formData.append("comentario", formValues.comentario);
    formData.append("resumen", formValues.resumen);
    formData.append("imagen", e.target.imagen.files[0]);

// Hacemos fetch para introducir la nueva información en la publicación.

    fetch(`http://localhost:8080/api/publicaciones/${params.id}/edit`, {
      method: "POST",
      body: formData,
      headers: {
        enctype: "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Post edited successfully");
        if(data.code===500){
          swal("Image size too high")
        } else{
          navigate("/userposts", { replace: true })
        }
    });
}

  useEffect(() => {
        //Hacemos fetch para ver que publicación vamos a editar.

    fetch(`http://localhost:8080/api/publicaciones/${params.id}`, {
        method: "GET",
        headers: {
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setFormValues((prev) => ({
            // Obtenemos información actual de la publicación.
            ...prev,
            titulo: data.result.titulo,
            ingredientes: data.result.ingredientes,
            comentario: data.result.comentario,
            resumen: data.result.resumen,
            imagen: data.result.imagen
          }));
        })
        
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Edit post information</h1>
      <div className={styles.default}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
                  <label className={styles.labels} htmlFor="titulo">Tittle:</label>
          <input className={styles.usuario}
         id="titulo"
            name="titulo"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.titulo}
          />
          <label className={styles.labels} htmlFor="comentario">Nutritional value:</label>
          <textarea className={styles.comentario}
            id="comentario"
            name="comentario"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.comentario}
          />
           <label className={styles.labels} htmlFor="resumen">Elaboration:</label>
          <textarea className={styles.usuario}
            id="resumen"
            name="resumen"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.resumen}
          />
             <label className={styles.labels} htmlFor="ingredientes">Ingredients:</label>
          <textarea className={styles.usuario}
            id="ingredientes"
            name="ingredientes"
            type="text"
            onChange={handleInputChange}
            defaultValue={formValues.ingredientes}
          />
          <label className={styles.labels} htmlFor="image">Image:</label>
          <input className={styles.usuario}
            id="imagen"
            name="imagen"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
          <button className={styles.boton}type="submit">Enviar formulario</button>
        </form>
      </div>
    </>
    
  );
};
export default  EditPost;
