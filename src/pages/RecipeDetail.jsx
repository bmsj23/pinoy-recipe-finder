import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { useFavorites } from "../hooks/useFavorites";
import recipesData from "../data/recipes.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    try {
      const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setError("Recipe not found");
      }
    } catch (err) {
      setError("Error loading recipe");
      console.error("Error loading recipe:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!recipe) return;

    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading recipe...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
            <p className="text-gray-600 mb-6">{error || "The recipe you're looking for doesn't exist."}</p>
            <Link
              to="/"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
              Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isRecipeFavorite = isFavorite(recipe.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link to="/" className="text-red-600 hover:text-red-700 transition-colors duration-200">
            ← Back to Recipes
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Recipe Header */}
          <div className="relative h-64 md:h-80">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/assets/placeholder-recipe.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.name}</h1>
              <p className="text-lg opacity-90">{recipe.description}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Favorite Button */}
            <div className="mb-6">
              <button
                onClick={handleFavoriteToggle}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                  isRecipeFavorite
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}>
                <span className="text-lg">{isRecipeFavorite ? "❤️" : "🤍"}</span>
                <span>{isRecipeFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
