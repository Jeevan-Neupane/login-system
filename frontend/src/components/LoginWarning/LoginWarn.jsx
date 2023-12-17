import React from "react";
import { LoginWarnDiv, LoginWarnText } from "./style";

function LoginWarn() {
  return (
    <>
      <h1>All Contacts</h1>
      <LoginWarnDiv>
        <LoginWarnText>You Need To Login To See Contacts</LoginWarnText>
      </LoginWarnDiv>
    </>
  );
}

export default LoginWarn;
