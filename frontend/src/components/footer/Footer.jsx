import React from "react";
import {
  ContentDiv,
  FooterDiv,
  FooterWrapper,
  Icon,
  IconDiv,
  LinkDiv,
  Links,
} from "./style";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
function Footer() {
  const footerLinks = [
    "Terms of Use",
    "Privacy Policy",
    "About",
    "Blog",
    "FAQ",
  ];
  return (
    <FooterDiv>
      <FooterWrapper>
        <LinkDiv>
          {footerLinks.map((link) => {
            return <Links key={link}>{link}</Links>;
          })}
        </LinkDiv>
        <ContentDiv>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          eum. Iure natus rerum perspiciatis cumque est architecto unde
          molestias corporis labore, officiis magnam blanditiis impedit
          perferendis, repellat ab quod! Sunt totam nisi deleniti consequatur
          maxime ipsam, qui hic excepturi beatae inventore architecto ad
          accusantium voluptates eius explicabo quia ut nam!
          <p>By Jeevan Neupane</p>
        </ContentDiv>
        <IconDiv>
          <Icon
            href='https://github.com/Jeevan-Neupane'
            target='_blank'
          >
            <AiFillGithub />
          </Icon>
          <Icon
            href='https://twitter.com/JeevanNeup38484'
            target='_blank'
          >
            <AiFillTwitterCircle />
          </Icon>
          <Icon
            href='https://jeevanneupane.com.np'
            target='_blank'
          >
            <FaRegUserCircle />
          </Icon>
          <Icon
            href='https://www.linkedin.com/in/jeevan-neupane-16a407258/'
            target='_blank'
          >
            <AiFillLinkedin />
          </Icon>
        </IconDiv>
      </FooterWrapper>
    </FooterDiv>
  );
}

export default Footer;
