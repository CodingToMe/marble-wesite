import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./View/AuthContext";

export default function AdminRoute({ children }) {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  // login hi nahi hai
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // login hai, lekin admin nahi
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}