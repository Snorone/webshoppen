import { ReactNode, useState } from 'react';
import productContext from '../context/productContext';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

export interface CartItem extends Product {
    amount: number;
  }

interface ProviderProps {
  children: ReactNode;
}


const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
       
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    }); console.log(cart);
  };
  

  const providerValues = {
    selectedProduct,
    setSelectedProduct,
    cart,
    addToCart,
  };

  return (
    <productContext.Provider value={providerValues}>
      {children}
    </productContext.Provider>
  );
};

export default Provider;
