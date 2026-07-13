import LandingPage from "../pages/Landing/LandingPage";
import SetupPage from "../pages/Setup/SetupPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/setup",
    element: <SetupPage />,
  },
];

export default routes;