// React ის წამოღება.
import React from "react";
// MovieCard კომპონენტის წამოღება MovieCard.jsx ფაილიდან.
import MovieCard from "./MovieCard"; 

// MovieList კომპონენტის შექმნა, რომელშიც გადაცემულია პარამეტრების props - ის სახით.
const MovieList = ({ movies, favorites, onToggleFavorite, onMovieClick }) => {
//   ფილმის არ მოძებნის შემთხვევაში, ვაბრუნებთ შეტყობინებას.
    if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="glass-card p-8 text-center text-gray-600 text-xl font-medium shadow-lg backdrop-blur-sm bg-white/30 rounded-xl border border-white/20">
          No movies found matching your criteria.
        </div>
      </div>
    );
  }

// გადავუარეთ ფილმების მასივს და ვაბრუნებთ თითოეულ ფილმს.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2">
      {movies.map((movie) => (
        // არენდერებს MovieCard კომპონენტს, რომელიც იღებს ფილმის ინფორმაციას და ფუნქციებს.
        <MovieCard
        // ვიყენებთ key ატრიბუტს, რათა React - მა თანმიმდევრობით მართოს მნიშვნელობები.
          key={movie.id}
        //   გადაეცემა ფილმის ინფორმაცია.
          movie={movie}
        //   ფავორიტების დამატება ან წაშლა.
          onToggleFavorite={onToggleFavorite}
        //   გადაეცემა ფავორიტების მასივი, რათა შევამოწმოთ, არის თუ არა ფილმი ფავორიტებში.
          isFavorite={favorites.some((favMovie) => favMovie.id === movie.id)}
        // დაჭერის შემდეგ გამოჩნდება დეტალური ინფორმაცია.
          onCardClick={onMovieClick}
        />
      ))}
    </div>
  );
};

// ამ კონკრეტული ფაილის ექსპორტირება
export default MovieList;
