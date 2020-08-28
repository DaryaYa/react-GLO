import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonCheckout";
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
	top: 110px;
	left: 0;
	background: white;
	min-width: 380px;
	height: calc(100% - 200px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.4);
	padding: 20px;
	flex-direction: column;
	justify-content: space-between;
`;

const OrderTitle = styled.h2`
	text-align: center;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 30px;
	& span:first-child {
		flex-grow: 1;
	}
`;

const TotalPrice = styled.span`
	text-align: right;
	min-width: 65px;
margin: 0 10px 0 35px;
	font-weight: bold;
`;

export const Order = () => {
    return (
      <OrderStyled>
        <OrderTitle>Your Order</OrderTitle>
        <OrderContent>
          <OrderList>
						<OrderListItem />
						<OrderListItem />
						<OrderListItem />
					</OrderList>
        </OrderContent>
        <Total>
          <span>Total</span>
					<span>6</span>
          <TotalPrice>1234 ₽</TotalPrice>
        </Total>
        <ButtonCheckout>Order</ButtonCheckout>
      </OrderStyled>
    );
}