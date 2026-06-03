import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const auth = useContext(AuthContext);
  const usuario = auth?.usuario;

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
