import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from '../ButtonCheckout';
import { CountItem } from "./CountItem";
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { Toppings } from "./Toppings";
import { Choice } from "./Choice";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Banner = styled.div`
  width: 100%;
	height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 90%;
  font-family: Pacifico, cursive;
  margin: 0 auto;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  font-weight: bold;
`;

// export const totalPriceItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choice = useChoice(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (event) => {
    if (event.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choice.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
  }

  // if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Info>
          <div>{openItem.name}</div>
          <div>{openItem.price} ₽</div>
        </Info>
        <CountItem {...counter} />
        {openItem.toppings && <Toppings {...toppings} />}
        {openItem.choices && <Choice {...choice} openItem={openItem} />}
        <TotalPriceItem>
          <span>Price:</span>
          <span>{totalPriceItems(order)} ₽</span>
        </TotalPriceItem>
        <ButtonCheckout
          onClick={isEdit ? editOrder : addToOrder}
          disabled={order.choices && !order.choice}
        >
          {isEdit ? 'Edit' : 'Add'}
        </ButtonCheckout>
      </Modal>
    </Overlay>
  );
};