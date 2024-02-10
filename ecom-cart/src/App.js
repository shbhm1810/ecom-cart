import logo from './logo.svg';
import './App.scss';

import { useState, createContext } from 'react'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inventory from './pages/inventory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inventory />

  },
]);

export const AppContext = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState("");


  return (
    <AppContext.Provider value={{ cartItems, setCartItems }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
