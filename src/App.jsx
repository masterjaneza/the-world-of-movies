// ვაიმპორტებთ React - ს და მის კაუჭებს.
import React, { useState, useEffect, useCallback } from 'react';
// ვაიმპორტებთ კომპონენტებს.
import moviesData from './components/Movie';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './glassmorphism.css';


// მთავარი კომპონენტი.
const App = () => {
  // useState ინახავს ფილმების მონაცემებს.
  const [allMovies, setAllMovies] = useState([]);
  // useState ინახავს საძიებო ზოლის მნიშვნელობას.
  const [searchTerm, setSearchTerm] = useState('');
  // useState ინახავს ფავორიტ ფილმების სიას.
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  // useState ინახავს ამჟამინდელ ამორჩეული ფილმის დეტალებს. 
  const [selectedMovie, setSelectedMovie] = useState(null);

  // ტვირთვას მონაცემებს და გვაჩვენებს ფავორით ფილმებს Local Storage - დან.
  useEffect(() => {
    setAllMovies(moviesData);
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Local Storage - ში ინახავს ფავორიტ ფილმებს.
  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  // ანახლებს საძიებო ზოლს.
  const handleSearchChange = useCallback((term) => {
    setSearchTerm(term);
    setShowFavorites(false);
  }, []);

  // ამატებს და შლის ფავორიტ ფილმებს.
  const handleToggleFavorite = useCallback((movie) => {
    setFavorites((prevFavorites) => {
      const isCurrentlyFavorite = prevFavorites.some((fav) => fav.id === movie.id);
      if (isCurrentlyFavorite) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  }, []);


// განხორციელდება Toggle ფილებს და ფავორიტ ფილმებს შორის.
// გასუფთავდება საძიებო ზოლი.
  const handleToggleShowFavorites = useCallback(() => {
    setShowFavorites((prev) => !prev);
    setSearchTerm('');
  }, []);


  // მოძებნის ფილმს, მისი ID - ს მიხედვით და აჩვენებს დეტალებს.
  const handleMovieClick = useCallback((movieId) => {
    const movie = allMovies.find(m => m.id === movieId);
    setSelectedMovie(movie);
  }, [allMovies]);


  // დახურავს ფილმის დეტალების ბარათს.
  const handleCloseDetails = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  // ცვლის ფილმების სიას.
  const moviesToDisplay = showFavorites ? favorites : allMovies;

  // ფილმების დასახელებას გადააქცევს lowercase - ში + ფილტრავს ფილმებს მისი დასახელებით.
  const filteredMovies = moviesToDisplay.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
  // ელემენტების გასტილვა.
  <div className="min-h-screen bg-vibrant-gradient font-sans text-gray-900 flex flex-col">
      <header
        className="bg-header-gradient py-8 shadow-xl rounded-b-3xl mb-8 glass-card"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          border: 'none'
        }}
      >
        <h1
          className="text-5xl font-extrabold text-white text-center tracking-tight"
          style={{
            letterSpacing: '0.04em',
            textShadow: '0 4px 32px #00e6a7',
            background: 'linear-gradient(90deg, #ff9800 0%, #00e6a7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          🎬 Movie Explorer 🍿
        </h1>
        <p className="text-center text-xl mt-4" style={{ color: '#00e6a7', fontWeight: 600 }}>
          Discover, search, and favorite your top movies in style.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="glass-card p-6 md:p-10 mb-10 shadow-2xl animate-fade-in">
          {/* ვარენდერებთ SearchBar კომპონენტს */}
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onToggleShowFavorites={handleToggleShowFavorites}
            showFavorites={showFavorites}
          />
        </div>

        <div className="glass-card p-4 md:p-8 shadow-2xl animate-fade-in">
          {/* ვარენდერებთ MovieList კომპონენტს */}
          
          <MovieList
            movies={filteredMovies}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onMovieClick={handleMovieClick}
          />
        </div>

        {selectedMovie && (
          <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
            <div className="relative frosted-modal p-8 md:p-12 animate-zoom-in shadow-2xl max-w-3xl w-full mx-4">
          {/* ვარენდერებთ MovieDetails კომპონენტს */}
              
              <MovieDetails
                movie={selectedMovie}
                onClose={handleCloseDetails}
              />
            </div>
          </div>
        )}
      </main>
      {/* Footer ნაწილი */}
      <footer className="footer-dark-glass">
        <div>
          Designer: Davit Janezashvili - <i>aka Masterjaneza</i>
        </div>
        <div>
          Developer: Davit Janezashvili - <i>aka Masterjaneza</i>
        </div>
      </footer>
    </div>
  );
};

// ვაექსპორტებთ App კომპონენტს.
export default App;
