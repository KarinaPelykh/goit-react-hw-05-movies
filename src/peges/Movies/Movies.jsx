import { useHttp } from 'components/hooks/useHttp';
import { fetchSearchFilms } from 'components/service/films.Api';
import { MoviForm } from 'peges/MoviForm/MoviForm';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [films] = useHttp(fetchSearchFilms, query);
  const filmList = films.results;
  const location = useLocation();
  const hendelSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <MoviForm onSubmit={hendelSubmit} />
      <ul>
        {filmList?.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
