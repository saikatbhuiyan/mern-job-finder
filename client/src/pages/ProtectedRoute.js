import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // check user
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }

  // if user login then go to children page
  return children;
};

export default ProtectedRoute;
