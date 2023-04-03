import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";
import Pest from './page/Pest'
import App from './App'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/pest",
    element: <Pest />,
  },
  {
    path: "/swot",
    element: <Pest />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
