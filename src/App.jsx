import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import AnimeList from "./components/AnimeList";
const App = () => {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=25`
      );
      const resdata = await res.json();
      setAnimeData(resdata.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(animeData);

  return (
    <>
      <div className="fixed top-0 bg-slate-300 flex items-center justify-around px-4 md:pd-11 h-[70px] w-full">
        <h1 className="text-xl md:text-3xl">MyAnimeList</h1>
        <input
        className="outline-none rounded text-red-300 p-1 md:text-xl text-md"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={<CiSearch/>}
        />
      </div>
      <div className="mt-[70px]">
        <AnimeList animeList={animeData} />
      </div>
    </>
  );
};

export default App;
