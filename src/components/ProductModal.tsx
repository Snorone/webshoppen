import React, { useContext } from 'react';
import productContext from '../context/productContext';

interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  const pV = useContext(productContext)

  const { addToCart } = useContext(productContext);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Stänger modalen när användaren klickar på knappen */}
        <button className="close-button" onClick={onClose}>X</button>
        {/* Visar detaljer om den valda produkten */}
        <h2>{pV.selectedProduct?.title}</h2>
        <img src={pV.selectedProduct?.thumbnail} alt={pV.selectedProduct?.title} width="100" />
        <p>{pV.selectedProduct?.description}</p>
        <p>Pris: {pV.selectedProduct?.price} kr</p>
                {/* Lägger till produkten i kundvagnen vid klick */}
        <button onClick={() => {if(pV.selectedProduct) addToCart(pV.selectedProduct)}}>Lägg till i kundvagn</button>
     </div>
     
    </div>
  );
};

export default ProductModal;
