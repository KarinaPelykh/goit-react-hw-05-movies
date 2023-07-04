import { fetchFilms } from 'components/service/films.Api';
import { useHttp } from 'components/hooks/useHttp';
import { Link } from 'react-router-dom';
export const Home = () => {
  const [listFilm] = useHttp(fetchFilms);
  const list = listFilm.results;
  return (
    <>
      <h1>Trending today</h1>
      <ul style={{ listStyle: 'none' }}>
        {list?.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
