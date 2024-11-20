import { useState, useContext } from "react";
import SearchForm from "./SearchForm";
import ProductModal from "./ProductModal";
import productContext from "../context/productContext";

interface Product {
  id: number
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const pV = useContext(productContext)
  // const { selectedProduct, setSelectedProduct } = useContext<Product|null>(productContext);


  //function to fetch data from api
  async function fetchData(): Promise<Product[]> {
    try {
      const response = await fetch(
        'https://dummyjson.com/products?limit=50&skip=10&select=title,price,thumbnail,description'
      );
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

//search 
  const handleSearch = async (searchTerm: string) => {
    const data = await fetchData();
    const filteredResults = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleOpenModal = (product: Product) => {
    pV.setSelectedProduct(product); 
  };

  const handleCloseModal = () => {
    pV.setSelectedProduct(null);
  };

  return (
    <>
      <h1>WebShop</h1>
      <hr />
      <SearchForm onSearch={handleSearch} />
      <div>
        <h2>Sökresultat:</h2>
        {searchResults.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Bild</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.title}{" "}
                    <button onClick={() => handleOpenModal(product)}>
                      Läs mer
                    </button>
                  </td>
                  <td>
                    <img src={product.thumbnail} alt={product.title} height="50" />
                  </td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Inga produkter hittades.</p>
        )}
      </div>
      {pV.selectedProduct && (
        <ProductModal onClose={handleCloseModal} />
      )}
    </>
  );
}