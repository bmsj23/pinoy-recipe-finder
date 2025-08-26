import { useState, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext.js";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("pinoy-recipe-favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("pinoy-recipe-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      // Check if recipe is already in favorites
      if (prev.some((fav) => fav.id === recipe.id)) {
        return prev;
      }
      return [...prev, recipe];
    });
  };

  const removeFromFavorites = (recipeId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some((fav) => fav.id === recipeId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    favoritesCount: favorites.length,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
