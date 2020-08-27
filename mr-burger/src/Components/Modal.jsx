import React from "react";
import styled from "styled-components";

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
  font-family: Pacifico;
  margin-bottom: 35%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 170px;
  height: 60px;
  color: white;
  background-color: green;
  border: none;
  border-radius: 5px;
  margin-bottom: 40px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

	function closeModal(event) {
		if(event.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	if (!openItem) return null;
    return (
      <Overlay id="overlay" onClick={closeModal}>
        <Modal>
          <Banner img={openItem.img} />
          <Info>
            <span>{openItem.name}</span>
            <span>{openItem.price} ₽</span>
          </Info>

          <Button>Add</Button>
        </Modal>
      </Overlay>
    );
};