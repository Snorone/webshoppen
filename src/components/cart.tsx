import React, { useContext } from 'react';
import productContext from '../context/productContext';


interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    amount: number;
  }
   
 

const Cart: React.FC = () => {
  const { cart } = useContext(productContext);

  return (
    <div>
      <h2>Kundvagn</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item: Product) => (
            <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} width="50" />
            <div>Produkt: {item.title}</div> 
            <div>Pris: {item.price} kr</div> 
            <div>Antal: {item.amount}</div> 
          </li>
          ))}
        </ul>
      ) : (
        <p>Kundvagnen är tom</p>
      )}
    </div>
  );
};

export default Cart;
