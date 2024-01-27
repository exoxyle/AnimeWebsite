import React from 'react';
// import Loader from './Loader'; // Adjust the import path based on your project structure

const AnimeList = ({ animeList }) => {
  if (!animeList) {
    return (
      <div className="flex justify-center items-center h-100vh w-full">
        {/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
         */}
         <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {animeList.map((anime, i) => (
        <div className="w-full" key={i}>
          <img
            className="rounded-lg"
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
          />
          <h2 className="">{anime.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
