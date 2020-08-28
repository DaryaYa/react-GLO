import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonCheckout";

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
	top: 110px;
	left: 0;
	background: white;
	min-width: 380px;
	height: calc(100% - 110px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.4);
	padding: 20px;
	flex-direction: column;
	justify-content: space-around;
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
`;

export const Order = () => {
    return (
      <OrderStyled>
        <OrderTitle>Your Order</OrderTitle>
        <OrderContent>
          <OrderList></OrderList>
        </OrderContent>
        <Total>
          <span>Total</span>
          <span>1234 ₽</span>
        </Total>
        <ButtonCheckout>Order</ButtonCheckout>
      </OrderStyled>
    );
}