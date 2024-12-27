import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
