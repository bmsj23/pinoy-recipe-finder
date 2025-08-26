import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const Header = () => {
  const { favoritesCount } = useFavorites();

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">🍽️ Pinoy Recipe Finder</h1>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-red-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="hover:text-red-200 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="bg-white text-red-600 rounded-full px-2 py-1 text-xs font-bold">
                  {favoritesCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
