import { useState } from "react";

type Props = {
  onSearch: Function;
};
const Header: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => onSearch(query);

  return (
    <div className="bg-white border-b-2 border-gray-100	px-2">
      <div className="bg-gray-50 max-w-lg mx-auto flex p-2 rounded my-2">
        <input
          type="text"
          className="h-10 flex-1 md:px-4 mr-2 bg-gray-50 md:text-base text-sm"
          placeholder="Search for restaurant, cuisines, and dishes"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn-dark">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
