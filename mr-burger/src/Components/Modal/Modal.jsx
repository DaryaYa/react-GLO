import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from '../ButtonCheckout';

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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = (event) => {
    if (event.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    name: openItem.name,
    price: openItem.price,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    // setOpenItem(null);
  };

  // if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Info>
          <div>{openItem.name}</div>
          <div>{openItem.price} ₽</div>
        </Info>

        <ButtonCheckout onClick={addToOrder}>Add</ButtonCheckout>
      </Modal>
    </Overlay>
  );
};