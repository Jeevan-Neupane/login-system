import styled from "styled-components"
import { tabletLandScape } from "../../styles/responsive"
export const LoginWarnDiv = styled.div`

height:75%;
width:100%;
display: flex;
align-items:center;
justify-content:center;
background-color:${props => props.theme.component};
${tabletLandScape({
    height:"20rem"
})}
`

export const LoginWarnText = styled.h2`
font-size:3rem;
color:${props => props.theme.otherText};
${tabletLandScape({
    fontSize:"2rem"
})}
`