import React, { useContext} from 'react';
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
  const { cart, setCart } = useContext(productContext);

  

  const sumOfPrice = (cart1: {id: number; price: number; amount: number }[]) => {
    return cart1.reduce((total, item) => total + item.price * item.amount, 0)
    
  }

const totalPrice = sumOfPrice(cart);
const totalPriceRounded = parseFloat(totalPrice.toFixed(2));

const removeItem = (id: number)=>{

    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};



  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
        <ul>
          {cart.map((item: Product) => (
            <li key={item.id}>
            <div>Product: {item.title}</div> 
            <div>Price: {item.price} kr</div> 
            <div>Amount: {item.amount}</div>
            <button onClick={() => removeItem(item.id)}>delete</button><br/>
          </li>
          ))}
        </ul>
         <h3>Total price: {totalPriceRounded} kr</h3></>
      ) : (
        <p>Kundvagnen är tom</p>

      )}
    </div>
  );
};

export default Cart;
