import { createBrowserRouter } from "react-router-dom";
import Root from "../src/Layout/Root";
import About from "../src/Pages/About/About";
import Blog from "../src/Pages/Blog/Blog";
import Contact from "../src/Pages/Contact/Contact";
import Home from "../src/Pages/Home/Home";
import Services from "../src/Pages/Services/Services";

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
        }
      ]
    },
  ]);

export default router;