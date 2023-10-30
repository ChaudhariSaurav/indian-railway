// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WelcomePage from "../components/WelcomePage";
import StationsBetween from "../components/GetStation";
import GetRoute from "../components/GetRoute";
import GETLive from "../components/GetLive";
import LiveRunningStatus from "../components/LiveStatus";
import TrainAvailability from "../components/SeatAvailablity";
import GetTrainDetails from "../components/GetTrainDetails";

function UserRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/getTrain" element={<GetTrainDetails />} />
        <Route path="/station" element={<StationsBetween />} />
        <Route path="/route" element={<GetRoute />} />
        <Route path="/live" element={<GETLive />} />
        <Route path="/liverun" element={<LiveRunningStatus />} />
        <Route path="/seat" element={<TrainAvailability />} />
      </Routes>
    </Router>
  );
}

export default UserRoute;