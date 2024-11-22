import { useState } from 'react';
 
interface SearchFormProps {
    onSearch: (searchTerm: string) => void;
  }


const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) =>{
  const [searchTerm, setSearchTerm] = useState<string>('');

         // Uppdaterar sökterm när användaren skriver i sökfältet
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  // Skickar sökterm till parent-komponenten
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    onSearch(searchTerm); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sök produkter..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Sök</button>
    </form>
  );
}

export default SearchForm;
