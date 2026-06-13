import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Applayout from "./components/Applayout";
import Resume from "./components/Resume";
import Service from "./pages/Service";
import Publication from "./pages/Publication";
import Certificate from "./pages/Certificate";


const App = () => {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    children: [
  {
    index: true,
    element:<HomePage />
  },
  {
    path:"/about",
    element:<About />
  },
    {
    path:"/skills",
    element:<Skills />
  },
    {
    path:"/projects",
    element:<Project />
  },
    {
    path:"/contact",
    element:<Contact />
  },
  {
    path:"/resume",
    element:<Resume />
  },

  {
    path:"/service",
    element:<Service />
  },
  
  {
    path:"/publications",
    element:<Publication />
  },
  {
    path:"/certificate",
    element:<Certificate />
  },
],
  },
]);


  return <RouterProvider router={router} />;
};


export default App;