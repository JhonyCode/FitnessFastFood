import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./components/AuthContext";
import './fontawesome';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
    <Footer />
  </AuthProvider>
);
