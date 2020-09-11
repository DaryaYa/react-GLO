import React from "react";
import styled from "styled-components";
import Trash from '../../imgs/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
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

const Toppings = styled.div`
	color: #9a9a9a;
	font-size: 16px;
	width: 100%;
`;

export const OrderListItem = ({ order, deleteItem, index, setOpenItem }) => {
  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
	.join(", ");
	
	const refDeleteButton = React.useRef(null);

  return (
    /* <OrderItemStyled
   onClick={(ev) => !ev.target.classList.contains("delete") && setOpenItem({ ...order, index })} > */
    <OrderItemStyled
      onClick={(ev) =>
        ev.target !== refDeleteButton.current && setOpenItem({ ...order, index })
      }
    >
      <ItemName>
        {order.name} {order.choice}
      </ItemName>
      <span>{order.count}</span>
      <ItemPrice>{totalPriceItems(order)} ₽</ItemPrice>
      {/* <TrashButton className="delete" onClick={() => deleteItem(index)} /> */}
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
      {topping && <Toppings>Additional: {topping}</Toppings>}
    </OrderItemStyled>
  );
};