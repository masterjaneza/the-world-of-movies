// React ბიბლიოთეკის გასტილვა.

import React from "react";

// შევქმენით Movie card ფუნქცია და გადავეცით საჭირო პარამეტრები props - ის სახით.
const MovieCard = ({ movie, onToggleFavorite, isFavorite, onCardClick }) => {
  return (
    // დავაბრუნეთ Div ელემენტი და გავსტილეთ შესაბამისად.
    <div
      className="glass-card movie-card flex flex-col rounded-2xl overflow-hidden"
      // გამოვიყენეთ obClick ატრიბუტი, რათა დაჭერის შემდეგ ამუშავდეს გადაცემული ფუნქცია. 
      onClick={() => onCardClick(movie.id)}
      style={{
        minHeight: "420px",
        background: "rgba(255,255,255,0.18)",
        border: "1.5px solid rgba(255,255,255,0.25)",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
        backdropFilter: "blur(14px) saturate(180%)",
        transition: "box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s cubic-bezier(0.4,0,0.2,1), border 0.5s cubic-bezier(0.4,0,0.2,1)",
        cursor: "pointer"
      }}
    >
        {/* სურათის გასტილვა & შესაბამისი ატრიბუტების გადაცემა*/}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover rounded-t-2xl"
        style={{ borderBottom: "1.5px solid rgba(255,255,255,0.25)" }}
        // თუ სურათი ვერ ჩაიტვირთება, მაშინ ჩავანაცვლებთ სხვა სურათით.
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/500x750/cccccc/333333?text=No+Poster`;
        }}
      />
      {/* Div ელემენტის გასტილვა. */}
      <div className="flex-1 flex flex-col justify-between p-5">
        <h3
          className="text-2xl font-bold mb-2 truncate text-gray-900"
          style={{ letterSpacing: "0.02em" }}
        >
          {movie.title}
        </h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-lg font-semibold">
            <span className="text-indigo-600">★</span> {movie.rating}
          </span>
          <button
            onClick={(e) => {
                // მხოლოდ შვილი ელემენტი რეაგირებს.
                e.stopPropagation();
                //  ფავორიტი ფილმის დამატება ან წაშლა.
              onToggleFavorite(movie);
            }}
            className={`btn-glass p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 ${
              isFavorite ? "bg-pink-100" : ""
            }`}
            // აძლევს ინფორმაციას თუ რას აკეთებს ღილაკი.
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
           {/* SVG ის ელემენტების გამოყენების გზა. */}
            <svg
              className={`w-7 h-7 ${
                isFavorite ? "text-pink-500" : "text-gray-400"
              } transition-colors duration-200`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">
            {/* გვაჩვენებს ფილმის გამოშვების წელს, თუ წელი არ მოიძებნა, მაშინ გამოვა "N/A" */}
            Year: <span className="text-indigo-700">{movie.year || "N/A"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// ამ კონკრეტული ფაილის ექსპორტირება

export default MovieCard;
