import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Comment } from "./Comment";
import { Registration } from "./Registration";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./Login";
import { AddComment } from "./AddComment";
import { EditComment } from "./EditComment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comments/:id",
        element: <Comment />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addComment",
        element: <AddComment />,
      },
      {
        path: "/edit/:id",
        element: <EditComment />,
      },
    ],
  },
  {
    path: "*",
    element: <>Return to home page</>,
  },
]);
