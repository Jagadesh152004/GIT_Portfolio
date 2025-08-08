import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Applayout from "./components/Applayout";

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
],
  },
]);


  return <RouterProvider router={router} />;
};


export default App;