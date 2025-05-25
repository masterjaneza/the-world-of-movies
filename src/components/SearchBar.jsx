// ვაიმპორტებთ React - ს.
import React from 'react';

// შევქმენით SearchBar ფუნქცია და გადავეცით საჭირო პარამეტრები props - ის სახით.
const SearchBar = ({ searchTerm, onSearchChange, onToggleShowFavorites, showFavorites }) => {
    // ვაბრუნებთ JSX ელემენტს, რომელიც წარმოადგენს საძიებო ზოლს.    
return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-[rgba(0,188,212,0.1)] backdrop-blur-lg rounded-xl shadow-lg mb-8 border border-[#00e6a7]/30">
      <input
        type="text"
        placeholder="Search movies by title..."
        className="w-full sm:w-1/2 p-3 rounded-lg mb-4 sm:mb-0 text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00e6a7]/50 focus:border-transparent"
        style={{
          color: '#1e1e2f',
          background: 'rgba(0,188,212,0.25)',
          border: '1.5px solid #00e6a7',
          fontWeight: 500,
          fontSize: '1.1rem',
          backdropFilter: 'blur(10px)'
        }}
        // value - ის ატრიბუტი, რომელიც განსაზღვრავს საძიებო ზოლის მნიშვნელობას.
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search movies"
      />
      <button
    //   გვაჩვენებს ფავორიტ ფილმებს თუ მოიძებნება.
        onClick={onToggleShowFavorites}
        className="w-full sm:w-auto px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00e6a7]/50"
        style={{
          background: 'rgba(0,230,167,0.18)',
          border: '1.5px solid #00e6a7',
          color: '#ff9800',
          fontWeight: 700,
          backdropFilter: 'blur(10px)'
        }}
      >
       {/* გამოვიყენეთ Ternary Operator, რადგან პირობიდან გამომდინარე, გამოიტანოს შესაბამისი ტექსტი. true - ს შემთხვევაში გამოვა 'Show All Movies', ხოლო False - ის შემთხვევაში გამოვა 'Show Favorites'.  */}
        {showFavorites ? 'Show All Movies' : 'Show Favorites'}
      </button>
    </div>
  );
};

// ვაექსპორტებთ ამ კონკრეტულ ფაილს.
export default SearchBar;
