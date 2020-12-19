import Link from "next/link";
import { useState } from "react";
import ConditionalView from "../conditional-view";

type Props = {
  onSearch?: Function;
  backButton?: boolean;
};
const Header: React.FC<Props> = ({ onSearch, backButton }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => onSearch(query);

  return (
    <div className="bg-white border-b-2 border-gray-100	px-2 fixed w-full h-20 flex">
      <ConditionalView condition={backButton}>
        <Link href="/">
          <a className="bg-black m-2 my-auto p-2 flex h-10 w-10 rounded-md">
            <img
              src="/static/icons/left-arrow.png"
              alt="< Back"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </ConditionalView>

      <ConditionalView condition={!!onSearch}>
        <div className="bg-gray-50 max-w-lg w-full flex p-2 rounded mx-auto my-auto">
          <input
            type="text"
            className="h-10 flex-1 md:px-4 mr-2 bg-gray-50 md:text-base text-sm focus:outline-none"
            placeholder="Search by restaurant, cuisines or dishes"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn-dark">
            Search
          </button>
        </div>
      </ConditionalView>
    </div>
  );
};

export default Header;
