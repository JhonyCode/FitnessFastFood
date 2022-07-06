import { Route, Navigate, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Header";
import Login from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { BrowserRouter } from "react-router-dom";
import Publicaciones from "./pages/Publicaciones/Publicaciones";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { UserDetails } from "./pages/Users/UserDetails";
import { Users } from "./pages/Users/Users";
import Register from "./pages/Register/Register";
import Categorias from "./pages/Categorias/Categorias";
import { Publicacion } from "./pages/Publicaciones/Publicacion";
import { Enviado } from "./pages/Enviado/Enviado";
import EditUser from "./pages/Users/EditUser";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/publicaciones">
          <Route index element={<Publicaciones />} />
          <Route path=":id" element={<Publicacion />} />
        </Route>
        <Route path="/usuarios">
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/enviado" element={<Enviado />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
