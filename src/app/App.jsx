import { RouterProvider } from "react-router-dom";

import { router } from "../pages/router";

import "./style.css";
import { ContextProvider } from "../shared/context";

export const App = () => {
  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
};
