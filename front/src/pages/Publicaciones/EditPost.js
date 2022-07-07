import { useState, useEffect } from "react";
import styles from "../Contact/Contact.module.css"
import swal from 'sweetalert';
import {useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
const EditPost = () => {
    const navigate = useNavigate();
  const params = useParams("");
  const [formValues, setFormValues] = useState({
    titulo: "",
    ingredientes: "",
    comentario: "",
    resumen:""
  });

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Function for submit form
    const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("titulo", formValues.titulo);
    formData.append("ingredientes", formValues.ingredientes);
    formData.append("comentario", formValues.comentario);
    formData.append("resumen", formValues.resumen);
    formData.append("imagen", e.target.imagen.files[0]);

    fetch(`http://localhost:8080/admin/publicaciones/${params.id}/edit`, {
      method: "POST",
      body: formData,
      headers: {
        enctype: "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Post edited successfully");
        // navigate("/dashboard", { replace: true })
        if(data.code===500){
          swal("Image syze too high")
        } else{
          navigate("/userposts", { replace: true })
        }
    });
}

  useEffect(() => {
    //?token=${localStorage.getItem("token")}
    fetch(`http://localhost:8080/admin/publicaciones/${params.id}`, {
        method: "GET",
        headers: {
          Authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setFormValues((prev) => ({
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
