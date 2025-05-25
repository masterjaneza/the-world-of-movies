// ვაიმპორტებთ React - ს.
import React from 'react';

// შევქმენით MovieDetails ფუნქცია და გადავეცით საჭირო პარამეტრები props - ის სახით.
const MovieDetails = ({ movie, onClose }) => {
    // თუ არ მოიძებნა ფილმი, მაშინ არაფერი დაბრუნდება/დარენდერდება. 
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div 
        className="max-w-3xl w-full p-8 relative transform scale-95 animate-zoom-in rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      >
        <button
        // ღილაკზე დაჭერის შედეგად, ამუშავდება onClose ფუნქცია.
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-indigo-400 text-4xl font-bold transition-colors duration-200 focus:outline-none z-10"
          aria-label="Close movie details"
          style={{
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '50%',
            padding: '0.25em 0.6em',
            boxShadow: '0 2px 8px 0 rgba(31,38,135,0.08)'
          }}
        >
        {/* შემოგვაქვს 'დახურვის' სიმბოლო */}
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-2xl object-cover"
              style={{
                border: '1.5px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.18)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
              }}
            //   შეცდომის დაფიქსირების შემთხვევაში, შევანაცვლებთ სხვა სურათით.
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/500x750/cccccc/333333?text=No+Poster`;
              }}
            />
          </div>
          <div className="flex-1 text-white">
            <h2 
              className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500" 
              style={{ letterSpacing: '0.03em' }}
            >
              {movie.title}
            </h2>
            <p className="text-xl mb-2">
              <span className="font-semibold">Year:</span> <span className="text-indigo-300">{movie.year}</span>
            </p>
            <p className="text-xl mb-4">
              <span className="font-semibold">Rating:</span> <span className="text-pink-400">{movie.rating} / 10</span>
            </p>
            <div 
              className="mt-6 p-4 rounded-xl" 
              style={{ 
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <p className="text-lg leading-relaxed text-gray-100">
                {movie.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ვაექსპორტებთ ამ კონკრეტულ ფაილს.
export default MovieDetails;
