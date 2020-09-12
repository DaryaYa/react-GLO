import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/Modal';
import { Order } from './Components/Order/Order';
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyCgAWNnMD1FkH_bo2Z029ZS4AdqrS24uXU",
  authDomain: "mrburger-f3c56.firebaseapp.com",
  databaseURL: "https://mrburger-f3c56.firebaseio.com",
  projectId: "mrburger-f3c56",
  storageBucket: "mrburger-f3c56.appspot.com",
  messagingSenderId: "147031215131",
  appId: "1:147031215131:web:013dea3752595b378efcbe",
};

firebase.initializeApp(firebaseConfig);


function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
