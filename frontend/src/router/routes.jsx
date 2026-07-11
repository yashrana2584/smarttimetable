import LandingPage from "../pages/Landing/LandingPage";
import WorkspacePage from "../pages/Workspace/WorkspacePage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
  },
];

export default routes;