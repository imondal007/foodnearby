const Header: React.FC = () => (
  <div className="bg-white border-b-2 border-gray-100	">
    <div className="container mx-auto px-5 flex flex-col justify-center items-center p-2">
      <div className="bg-gray-50 rounded p-2 w-1/2 flex flex-row">
        <input
          type="text"
          className="h-10 flex-1 px-4 bg-gray-50"
          placeholder="Search for restaurant, cuisines, and dishes"
        />
        <button className="btn-dark">Search</button>
      </div>
    </div>
  </div>
);

export default Header;
