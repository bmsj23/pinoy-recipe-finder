import { Link, useLocation } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const Header = () => {
  const { favoritesCount } = useFavorites();
  const location = useLocation(); // Hook to get the current page location

  // Define styles for active and inactive links to keep the code clean
  const activeLinkClass = "bg-white text-red-600 rounded-lg px-4 py-2 shadow-sm font-medium transition-all duration-300";
  const inactiveLinkClass = "text-white hover:text-red-200 font-medium px-4 py-2 transition-colors duration-200";

  return (
    <header className="bg-red-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold font-heading">Pinoy Recipe Finder</h1>
          </Link>

          <nav className="flex items-center space-x-2">
            {/* Home Link */}
            <Link
              to="/"
              className={location.pathname === "/" ? activeLinkClass : inactiveLinkClass}
            >
              Home
            </Link>

            {/* Favorites Link */}
            <Link
              to="/favorites"
              className={`${
                location.pathname === "/favorites" ? activeLinkClass : inactiveLinkClass
              } flex items-center space-x-3`}
            >
              <span>Favorites</span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-bold w-8 text-center transition-colors duration-300 ${
                  location.pathname === "/favorites"
                    ? "bg-red-600 text-white"   // Badge style when active
                    : "bg-white text-red-600" // Badge style when inactive
                }`}
              >
                {favoritesCount}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;