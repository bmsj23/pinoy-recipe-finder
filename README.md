# 🍽️ Pinoy Recipe Finder

A functional single-page application that serves as a digital cookbook for classic Filipino recipes. Built with React, this application allows users to browse recipes, view detailed instructions, and save their favorite dishes for later.

## ✨ Features

- **Recipe Browsing**: View a grid of authentic Filipino recipes with images and descriptions
- **Real-time Search**: Filter recipes by name, description, or ingredients
- **Recipe Details**: View complete recipes with ingredients and step-by-step instructions
- **Favorites System**: Add/remove recipes from favorites with persistent storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Favorites are saved locally and persist between sessions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pinoy-recipe-finder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with favorites count
│   ├── RecipeCard.jsx  # Recipe card component for grid display
│   └── SearchBar.jsx   # Search input component
├── contexts/           # React Context for global state
│   └── FavoritesContext.jsx  # Favorites management context
├── data/              # Static data files
│   └── recipes.json   # Filipino recipes data
├── pages/             # Page components
│   ├── Homepage.jsx   # Main page with recipe grid and search
│   ├── RecipeDetail.jsx  # Individual recipe page
│   └── Favorites.jsx  # Favorites page
├── App.jsx            # Main app component with routing
├── main.jsx          # App entry point
└── index.css         # Global styles and Tailwind imports
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **Context API** - Global state management
- **Local Storage** - Data persistence

## 📱 Pages and Features

### Homepage (`/`)

- Displays all recipes in a responsive grid
- Real-time search functionality
- Recipe cards with images, names, and descriptions
- Click any recipe to view details

### Recipe Detail (`/recipe/:id`)

- Complete recipe information
- Ingredients list with bullet points
- Step-by-step instructions
- Add/Remove from favorites button
- Breadcrumb navigation

### Favorites (`/favorites`)

- Shows only favorited recipes
- Search within favorites
- Empty state with call-to-action
- Same grid layout as homepage

## 🎨 Design Features

- **Filipino-inspired color scheme** with red primary colors
- **Responsive grid layout** that adapts to screen size
- **Smooth animations** and hover effects
- **Accessible design** with proper focus states
- **Loading states** for better user experience
- **Error handling** for missing recipes or images

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Recipe Data

The application includes 20 authentic Filipino recipes including:

- Chicken Adobo
- Sinigang na Baboy
- Beef Kare-Kare
- Pork Sisig
- Lechon Kawali
- And many more!

Each recipe includes:

- Name and description
- Ingredient list
- Step-by-step instructions
- Recipe image

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
