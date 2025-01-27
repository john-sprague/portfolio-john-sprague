import { Link } from "react-router-dom";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import ReactIcon from "../assets/icons/react.svg";
import NodeJSIcon from "../assets/icons/nodejs.svg";
import SqlDeveloperIcon from "../assets/icons/sqldeveloper.svg";
import PythonIcon from "../assets/icons/python.svg";
import CssIcon from "../assets/icons/css.svg";
import HTML5Icon from "../assets/icons/html5.svg";

const Home = () => {
  const navigation = [
    {
      to: "projects",
      name: "Projects",
    },
    {
      to: "contact",
      name: "Contact",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-bounce">
        <ul className="flex items-center justify-center gap-5">
          {navigation.map((item) => {
            return (
              <Link
                className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
                to={item.to}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1 className=" p-10 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        John Sprague
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-zinc-500 ">
          Hi, my name is John, I'm an Enterprise Software Engineer with
          knowledge and experience in front-end / full stack development,
          <br />
          UX, and complex problem solving, producing code and features that
          strengthened applications for IBM.
        </h2>
        <div className="flex items-center justify-center gap-2 mt-5">
          <JavaScriptIcon />
          <TypeScriptIcon />
          <ReactIcon />
          <NodeJSIcon />
          <SqlDeveloperIcon />
          <PythonIcon />
          <CssIcon />
          <HTML5Icon />
        </div>
      </div>
    </div>
  );
};

export default Home;
