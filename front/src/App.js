import { Route, Navigate, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Header";
import Login from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { BrowserRouter } from "react-router-dom";
import Posts from "./pages/Publicaciones/Posts";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import { Post } from "./pages/Publicaciones/Post";
import EditUser from "./pages/Users/EditUser";
import { NewPost } from "./pages/Publicaciones/NewPost";
import { UserPosts } from "./pages/Publicaciones/UserPosts";
import EditPost from "./pages/Publicaciones/EditPost";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/userposts" element={<UserPosts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
