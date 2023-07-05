import { fetchFilms } from 'service/films.Api';
import { useHttp } from 'hooks/useHttp';
// import { Link } from 'react-router-dom';
import { MoviList } from 'peges/MoviList/MovaList';
export const Home = () => {
  const [listFilm] = useHttp(fetchFilms);
  const filmList = listFilm.results;
  return (
    <>
      <h1>Trending today</h1>
      <MoviList filmList={filmList} />
    </>
  );
};
