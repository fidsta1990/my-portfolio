import {
  FaHtml5,
  FaGitSquare,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledComponents } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "html",
    cName: "html"
  },
  {
    icon: <FaCss3Alt />,
    name: "css3",
    cName: "css3"
  },
  {
    icon: <IoLogoJavascript />,
    name: "javascript",
    cName: "javascript"
  },
  {
    icon: <FaGitSquare />,
    name: "git",
    cName: "git"
  },

  {
    icon: <FaBootstrap />,
    name: "bootstrap",
    cName: "bootstrap"
  },
  {
    icon: <FaReact />,
    name: "react",
    cName: "react"
  },
  {
    icon: <FaSass />,
    name: "sass",
    cName: "sass"
  },
 
  {
    icon: <SiStyledComponents />,
    name: "styled-components",
    cName: "styled-components"
  },
];

export default skills;
