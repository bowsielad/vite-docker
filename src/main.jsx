import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import ProfilesPage from "./pages/ProfilesPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profiles",
        element: <ProfilesPage />,
        children: [
          {
            path: "/profiles/:profileId",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
