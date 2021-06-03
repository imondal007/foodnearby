import { useRouter } from "next/router";
import { useState } from "react";
import ConditionalView from "../conditional-view";

type Props = {
  onSearch?: Function;
  backButton?: boolean;
  q?: string | string[];
};
const Header: React.FC<Props> = ({ onSearch, backButton, q = "" }) => {
  const [query, setQuery] = useState(q);
  const router = useRouter();

  const handleSubmit = () => onSearch(query);

  return (
    <div className="bg-white border-b-2 border-gray-100	px-2 fixed w-full h-20 flex z-50">
      <ConditionalView condition={backButton}>
        <button
          onClick={() => router.back()}
          className="bg-black m-2 my-auto p-2 flex h-10 w-10 rounded-md"
        >
          <img
            src="/static/icons/left-arrow.png"
            alt="< Back"
            width={32}
            height={32}
          />
        </button>
      </ConditionalView>

      <ConditionalView condition={!!onSearch}>
        <div className="bg-gray-50 max-w-lg w-full flex p-2 rounded mx-auto my-auto">
          <label
            htmlFor="search-input"
            className="flex-1"
            style={{ fontSize: 0 }}
          >
            Search
            <input
              value={query}
              type="text"
              className="h-10 flex-1 md:px-4 mr-2 bg-gray-50 md:text-base text-sm focus:outline-none"
              id="search-input"
              placeholder="Search restaurant"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit} className="btn-dark">
            Search
          </button>
        </div>
      </ConditionalView>
    </div>
  );
};

export default Header;
