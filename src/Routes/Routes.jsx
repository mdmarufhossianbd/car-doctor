import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;