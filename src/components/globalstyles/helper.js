export const setColor = {
  primary: `#3acbb8`,
  secondary: "#63bce6",
  mainWhite: "#fff",
  mainGrey: "#ececec",
  mainDark: "#232c64",
  linearLight:
    "linear-gradient(72deg, rgba(58,203,184,1) 0%, rgba(99,188,230,1) 100%);",
  linearDark: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
};

export const setFont = {
  main: "font-family: 'Open Sans', sans-serif",
  titled: "font-family: 'Proza Libre', sans-serif;",
};

export const setFlex = ({ x = "center", y = "center", d = "row" } = {}) => {
  return `display:flex; align-items:${y}; justify-content:${x}; flex-direction: ${d};`;
};

export const setGrid = ({ no = "2" } = {}) => {
  return `display: grid; grid-template-columns: repeat(${no},1fr)`;
};

export const setGridRes = ({ x = "center", size = "340px" } = {}) => {
  return `display:grid; grid-template-columns(auto-fill, minmax(${size}, 1fr)); justify-items:${x};`;
};

export const transition = ({
  element = "all",
  speed = "0.2",
  trans = "ease-in",
} = {}) => {
  return `transition: ${element} ${speed}s ${trans}`;
};

export const letterSpacing = (size) => `${size}px`;

export const shadows = {
  light: `box-shadow: 0px 0px 5px rgba(255,255,255,.4)`,
  dark: `box-shadow: 0px 0px 5px rgba(0,0,0,.7)`,
  darker: `box-shadow: 0px 0px 10px rgba(0,0,0,.7)`,
};

export const border = ({ size = "2", color = "#000" } = {}) => {
  return `border:${size}px solid ${color}`;
};

// media query
export const sizes = {
  xl: "1200px",
  l: "990px",
  m: "800px",
  s: "576px",
  xs: "414px",
  xss: "360px",
};
