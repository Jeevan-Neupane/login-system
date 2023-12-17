import styled from "styled-components";
import { tabletLandScape } from "./responsive";

export const WrapperContainer = styled.div`
max-width:1440px;
width:100%;
padding:0rem 2rem;
margin:0 auto;
`

export const Main = styled(WrapperContainer)`padding-top:60px;
`

export const LayoutDivContainer = styled.div`


`

export const HomePageMain = styled.div`
display: flex;

margin-top:5rem;
margin-bottom:5rem;
justify-content:space-between;

${tabletLandScape({
    flexDirection: "column", gap: "2rem"
})}



`

export const HomeRightDiv = styled.div`
width:60%;
h1{
    text-align:center;
    font-size:3rem;
    padding:1rem;
    background-color:${props => props.theme.component};
    border-bottom:1px solid ${props => props.theme.border};
        
   
}

${tabletLandScape({
    width: "80%",
    margin: "auto"
   
})}


`


export const HomeLeftDiv = styled.div`
width:30%;


h1{
    text-align:center;
    font-size:3rem;
    padding-bottom:1rem;
    margin-bottom:1rem;
    background-color:${props => props.theme.component};
    border-bottom:1px solid ${props => props.theme.border};
     max-width:40rem;
     ${tabletLandScape({
    maxWidth: "100%"
})}

     
}

${tabletLandScape({
    margin: "auto",
    width: "70%"
})}


`

export const SignUpDiv = styled(WrapperContainer)`
position:relative;
display: flex;
align-items:center;
justify-content:center;
width:100%;
margin:6rem 0;
`
export const LoginDiv = styled(WrapperContainer)`
position:relative;
display: flex;
align-items:center;
justify-content:center;
width:100%;
margin:6rem 0;
`

export const EditPageDiv = styled.div`
display: grid;
width:100%;
flex-direction:column;
margin:5rem auto;
max-width:40rem;

h1{
    text-align:center;
    font-size:3rem;
    padding:1rem;
    background-color:${props => props.theme.component};
    border-bottom:1px solid ${props => props.theme.border};
}


`