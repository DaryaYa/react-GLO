import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
position: relative;
  width: 400px;
  height: 155px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  margin: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.4;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 15px 15px orange;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item 
        key={item.id} 
        img={item.img} 
        onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{item.price} ₽</p>
      </Item>
    ))}
  </List>
);