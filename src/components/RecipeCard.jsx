import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const RecipeCard = ({ recipe }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // prevent navigation when clicking the heart
    e.stopPropagation(); // stop event bubbling

    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  const isRecipeFavorite = isFavorite(recipe.id);
  return (
    <Link to={`/recipe/${recipe.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-90 flex flex-col">
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/assets/placeholder-recipe.jpg";
            }} />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

          {/* Favorites Heart Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer ${
              isRecipeFavorite
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white bg-opacity-90 text-gray-600 hover:bg-opacity-100"
            }`}
            aria-label={isRecipeFavorite ? "Remove from favorites" : "Add to favorites"}>
            <svg
              className="w-5 h-5"
              fill={isRecipeFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-200">
            {recipe.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-grow">{recipe.description}</p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {recipe.ingredients?.length || 0} ingredients
            </span>
            <span className="text-red-600 text-sm font-medium group-hover:text-red-700">View Recipe →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
