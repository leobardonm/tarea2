import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border rounded px-4 py-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white rounded px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;