import { createGlobalStyle } from "styled-components";
import { setColor, setFont, letterSpacing, sizes, shadows } from "./helper";

const Global = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
${setFont.main};
background: ${setColor.linear}; 
}

h1{
  font-size: 4.8rem;
    ${setFont.titled};
  text-align: center;
  text-transform: uppercase;
 line-height:1;
 letter-spacing: ${letterSpacing(2)};
${setColor.gradient}
}
h2{
  text-transform: uppercase;
    ${setFont.titled};
  text-align: center;
  font-size: 4rem;
 line-height:1;
  letter-spacing: ${letterSpacing(2)};
}

h3{
  font-size: 3.2rem;
    ${setFont.titled};
  text-align: center;
  text-transform: uppercase;
 line-height:1.2;
  letter-spacing: ${letterSpacing(2)};
 ${setColor.primary};
}

h4{
  font-size: 2.4rem;
    ${setFont.titled};
  text-align: center;
  text-transform: uppercase;
 line-height:1.5;
  letter-spacing: ${letterSpacing(2)};
  margin-bottom: .8rem;
  color:${setColor.primary};
}

h5{
  font-size: 1.6rem;
    ${setFont.titled};
  text-align: center;
  text-transform: uppercase;
 line-height:1.5;
  letter-spacing: ${letterSpacing(2)};
  margin-bottom: .8rem;
}

p{
  line-height: 1.5;
  font-size: 1.6rem;
  letter-spacing: ${letterSpacing(1)};
  margin-bottom: .8rem;
  ${setFont.main};
}

a{
  text-decoration: none;
  ${setFont.main};
}

ul,li{
  list-style: none;
}

img{
  width: 100%;
  display: block;
  object-fit: cover;
}

.navbar{
  background: transparent;
 &.active{
  ${shadows.darker};
  background: ${setColor.primary};
  }
}

@media (max-width: ${sizes.m}){

  
  h1{
    font-size:4rem;
  }
 h2{
  font-size:3.2rem;
 }
 h3{
  font-size:2.4rem;
 }
 h4{
  font-size:1.6rem;
 }
 h5{
  font-size:1.6rem;
 }

 .navbar{
  ${shadows.darker};
  background: ${setColor.primary};
}

}


`;

export default Global;
