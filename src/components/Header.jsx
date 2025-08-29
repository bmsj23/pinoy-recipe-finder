import { Link, useLocation } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const Header = () => {
  const { favoritesCount } = useFavorites(); 
  const location = useLocation();

  // --- FIX: Use a consistent border to prevent layout shift ---
  const activeLinkClass = "bg-white text-red-600 rounded-lg px-4 py-2 font-medium transition-all duration-300 border border-white";
  const inactiveLinkClass = "text-white hover:text-red-200 font-medium px-4 py-2 border border-transparent";

  return (
    <header className="bg-red-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/favicon.ico" 
              alt="Pinoy Recipe Finder Logo"
              className="h-8 w-8" 
            />
            <h1 className="text-3xl font-bold font-heading">Pinoy Recipe Finder</h1>
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
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-600"
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