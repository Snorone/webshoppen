import React, { useContext } from 'react';
import productContext from '../context/productContext';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useContext(productContext);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} width="100" />
        <p>{product.description}</p>
        <p>Pris: {product.price} kr</p>
        <button onClick={() => addToCart(product)}>Lägg till i kundvagn</button>
     </div>
     
    </div>
  );
};

export default ProductModal;
