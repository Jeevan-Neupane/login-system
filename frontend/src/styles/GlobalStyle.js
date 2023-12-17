import { createGlobalStyle } from "styled-components";
import { laptop, mobile, mobileLandScape, tablet, tabletLandScape } from "./responsive";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    font-size:62.5%;
    font-size:62.5%;
    ${laptop({
    fontSize: "60%"
})}

    ${tabletLandScape({
    fontSize: "55%"
})}

${tablet({
    fontSize: "52%"
})}

${mobileLandScape({
    fontSize: "40%"
})}
${mobile({
    fontSize: "30%"
})}
}
body{
    background-color:${props => props.theme.background};  
    font-family:${props => props.theme.font};
    overflow-x:hidden;
    color:${props => props.theme.text};
    
}

`

export default GlobalStyle;