import { useEffect, useState } from "react";
function Categorias() {
  const [Categorias, setCategorias] = useState([]);
  useEffect(() => {
    fetch("http://FitnessFastFood/back/public/index.php/admin/categoria", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => setCategorias(data.result));
  }, []);
  return (
    <div>
      <div className="backgroundvideo">
        <video autoPlay="yes" muted preload="yes">
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="seccion">
        {Categorias.map((categoria) => (
          <div className="publicaciones" key={categoria.id}>
            <div className="titulo">{categoria.nombre}</div>
            <div className="ingredientes">{categoria.descripcion}</div>
            </div>
        ))}
      </section>
    </div>
  );
}

export default Categorias;
