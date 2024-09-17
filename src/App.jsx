import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Reports from "./Pages/Reports";
import Layout from "./Outlet/Layout";
import Personal from "./Pages/PersonalAI"
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,


      children: [
        {
          path: '',
          element: <Reports />,
        },

        {
          path: 'personal',
          element: <Personal />,
        },


      ]
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },


  ]);


  return (
    <>
      <RouterProvider router={router} />    </>
  )
}

export default App
