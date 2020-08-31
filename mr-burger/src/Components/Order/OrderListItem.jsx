import React from "react";
import styled from "styled-components";
import Trash from '../../imgs/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
	display: flex;
	margin: 15px 0;
`;

const ItemName = styled.span`
	flex-grow: 1;
`;

const ItemPrice = styled.span`
	min-width: 65px;
	text-align: right;
	margin: 0 10px 0 20px;
`;

const TrashButton = styled.button`
	width: 24px;
	height: 24px;
	border-color: transparent;
	background-color: transparent;
	background-image: url(${Trash});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>1</span>
    <ItemPrice>{totalPriceItems(order)} ₽</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);