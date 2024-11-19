import { createContext, Dispatch, SetStateAction } from 'react';
import { CartItem } from '../providers/Provider';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}
 


export interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
  cart: CartItem[]
  addToCart: (product: Product) => void;
  setCart:Dispatch<SetStateAction<CartItem[]>>
}


const productContext = createContext<ProductContextType>({
  selectedProduct: null,
  setSelectedProduct: () => {},
  cart: [{
     id: 0,
     title: '',
     description: '',
     thumbnail: '',
     price: 0,
     amount: 1,
  },],
  addToCart: () => {},
  setCart: () => {}
});

export default productContext;

