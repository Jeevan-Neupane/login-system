import {
  DesktopNav,
  Link,
  Logo,
  LogoText,
  LogoutButton,
  MenuLoginUserDiv,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./style";

import Swal from "sweetalert2";

function Header() {
  let user = false;
  const navData = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Login",
      url: "/login",
      active: !user,
    },
    {
      title: "Sign Up",
      url: "/signup",
      active: !user,
    },
  ];

  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };

  return (
    <Nav>
      <NavWrapper>
        <Logo>
          <LogoText to='/'>
            Contact <span>Saver</span>
          </LogoText>
        </Logo>

        <DesktopNav>
          <NavItems>
            {navData.map((item) => {
              return (
                item.active && (
                  <NavItem key={item.title}>
                    <Link
                      to={item.url}
                      style={linkStyle}
                    >
                      {item.title}
                    </Link>
                  </NavItem>
                )
              );
            })}

            {user && (
              <LogoutButton
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "Do you want to logout?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Logged Out!",
                    background: "#001e2b",
                    color: "#fff",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(removeUser());
                      dispatch(removeToken());
                      dispatch(removeTokenLocalStorage());
                      dispatch(removeContacts());
                      Swal.fire({
                        title: "Log Out!",
                        text: "You are logged out",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        background: "#001e2b",
                        color: "#fff",
                      });
                    }
                  });
                }}
              >
                Logout
              </LogoutButton>
            )}
          </NavItems>
        </DesktopNav>
      </NavWrapper>
    </Nav>
  );
}

export default Header;
