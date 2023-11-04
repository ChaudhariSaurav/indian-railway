import { Navigate } from "react-router-dom";
import GetTrainDetails from "../components/GetTrainDetails";
import NotFound from "../components/notFound";
import GtPnr from "../components/GtPnr";
import GetStation from "../components/GetStation";
import GetRoute from "../components/GetRoute";
import GETLive from "../components/GetLive";
import LiveRunningStatus from "../components/LiveStatus";
import WelcomePage from "../components/WelcomePage";

export const ValidAuthroutes = [
    { path: "/", element: <Navigate to="/home" replace={true} /> },
    { path: "/home", element: <WelcomePage /> },
    { path: "/getTrain", element: <GetTrainDetails /> },
    { path: "/pnr-status", element: <GtPnr /> },
    { path: "/station", element: <GetStation /> },
    { path: "/route", element: <GetRoute /> },
    { path: "/live", element: <GETLive /> },
    { path: "/liverun", element: <LiveRunningStatus /> },
    { path: "/*", element: <NotFound /> },
];
