import React from "react";
import {
  ChangePasswordButton,
  ChangePasswordDiv,
  HomeContainer,
  UserDiv,
  UserEmail,
  UserImg,
  UserImgDiv,
  UserInfoDiv,
  UserName,
} from "./style";

import person from "../../assets/person.jpg";

function Home() {
  return (
    <HomeContainer>
      <UserInfoDiv>
        <UserDiv>
          <UserName></UserName>
          <UserEmail></UserEmail>
        </UserDiv>

        <UserImgDiv>
          <UserImg src={person} />
        </UserImgDiv>
      </UserInfoDiv>

      <ChangePasswordDiv>
        <ChangePasswordButton>Change Password</ChangePasswordButton>
      </ChangePasswordDiv>
    </HomeContainer>
  );
}

export default Home;
