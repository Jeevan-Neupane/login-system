import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
import { tablet } from "../../styles/responsive";


const Nav = styled.nav`
background-color:${props => props.theme.component};
padding:1rem 0;
position:fixed;
top:0;
left:0;
right:0;
height:60px;
z-index:1000;
display: flex;
align-items:center;
justify-content:center;
transition:transform .5s ease-in-out;

`
const NavWrapper = styled(WrapperContainer)`
display: flex;
align-items:center;
justify-content:space-between;


`
const Logo = styled.div`
display: flex;
align-items:center;
justify-content:center;

`

const LogoText = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
font-size:3.5rem;
font-family:${props => props.theme.font_family_two};
span{
    color:${props => props.theme.specialText};
}



font-weight:600;

`

const NavItems = styled.ul`
display: flex;
gap:7rem;
transition:display .2s ease-in-out;

${tablet({
 gap:"4rem"
})}
align-items:center;


`

const NavItem = styled.li`
font-size:2rem;
list-style:none;
`

const Link = styled(NavLink)`
text-decoration:none;
color:${props => props.theme.text};

`



//*Small Screen

const MenuIconsDiv = styled.div`

font-size:3rem;
cursor: pointer;
display:none;


`

const MenuLoginUserDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
gap:2rem;
`
const MobileNav = styled.div`
display:none;

`

const DesktopNav = styled.div`

`
const LogoutButton = styled.button`

padding:1rem 2rem;
outline:none;
border:none;
background-color:${props => props.theme.background};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.border};
cursor: pointer;
font-size:1.6rem;

`
export {
    Nav, Link, Logo, LogoText, NavItem, NavItems, NavWrapper, MenuIconsDiv, MenuLoginUserDiv, MobileNav, DesktopNav, LogoutButton
}
