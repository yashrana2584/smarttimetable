import LandingPage from "../pages/Landing/LandingPage";
import SetupPage from "../pages/Setup/SetupPage";
import TimetablePage from "../pages/Timetable/TimetablePage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/setup",
    element: <SetupPage />,
  },
  {
    path: "/timetable",
    element: <TimetablePage />,
  },
];

export default routes;