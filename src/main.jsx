import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import { BlogPage } from "./pages/blog/BlogPage.jsx";
import { HomePage } from "./pages/home/HomePage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path:"/Home",
        element:<HomePage/>
      },
      {
        path:"/Blog",
        element:<BlogPage/>

      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>
);
