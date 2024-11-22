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

// Hanterar delad statehantering (context) för applikationen
const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // Ökar mängden om produkten redan finns i kundvagnen
        return prevCart.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
       
      } else {
           // Lägger till en ny produkt i kundvagnen
        return [...prevCart, { ...product, amount: 1 }];
      }
    }); console.log(cart);
  };
  

  const providerValues = {
    selectedProduct,
    setSelectedProduct,
    cart,
    addToCart,
    setCart,
  };

  return (
        // Delar värden och funktioner via Context API
    <productContext.Provider value={providerValues}>
      {children}
    </productContext.Provider>
  );
};

export default Provider;
