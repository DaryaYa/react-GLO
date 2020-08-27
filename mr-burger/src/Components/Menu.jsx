import React from "react";
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
	background-color: bisque;
	padding-top: 100px;

`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <section>
      <h2>Burgers</h2>
      <ListItem itemList={dbMenu.burger} />
    </section>

    <section>
      <h2>Starters / Drinks</h2>
      <ListItem itemList={dbMenu.other} />
    </section>
  </MenuStyled>
);