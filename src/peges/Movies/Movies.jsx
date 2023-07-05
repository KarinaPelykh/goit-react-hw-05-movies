import { useHttp } from 'hooks/useHttp';
import { fetchSearchFilms } from 'service/films.Api';
import { MoviForm } from 'peges/MoviForm/MoviForm';
import { useSearchParams } from 'react-router-dom';
import { MoviList } from 'peges/MoviList/MovaList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [films] = useHttp(fetchSearchFilms, query);
  const filmList = films.results;

  const hendelSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <MoviForm onSubmit={hendelSubmit} />
      <MoviList filmList={filmList} />
    </>
  );
};
