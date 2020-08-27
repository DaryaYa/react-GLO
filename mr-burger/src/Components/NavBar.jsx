import React from "react";
import styled from "styled-components";
import logoImg from '../imgs/logo.svg';
import signButton from '../imgs/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 80px;
    width: 99vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: green;
    color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
  margin-right: 25px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
`;



export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>Mr Burger</H1>
    </Logo>
    <Login>
      <img src={signButton} alt='log in' />
      <p>Log In</p>
    </Login>
    
  </NavBarStyled>
);