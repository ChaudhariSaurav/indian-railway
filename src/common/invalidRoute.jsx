import { Navigate } from "react-router-dom";
import Login from "../components/loginScreen";

export const InvalidLoginRoutes = [
    { path: "/*", element: <Navigate to="/auth" replace={true} /> },
    { path: "/auth", element: <Login /> },
];
