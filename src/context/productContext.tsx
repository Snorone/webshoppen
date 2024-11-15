import { createContext, Dispatch, SetStateAction } from 'react';

interface Product {
  map(arg0: (item: Product) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  length: number;
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}
 


interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
  cart: Product
}


const productContext = createContext<ProductContextType>({
  selectedProduct: null,
  setSelectedProduct: () => {},
  cart: {
     id: 0,
     title: '',
     description: '',
     thumbnail: '',
     price: 0
  },
});

export default productContext;

