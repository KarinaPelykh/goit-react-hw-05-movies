import { fetchCreditsFilm } from 'components/service/films.Api';
import { useHttp } from 'components/hooks/useHttp';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchCreditsFilm, movieId);
  console.log(cast);
  if (!cast || cast.length === 0) {
    return <p>We don`t have any cast for this movie.</p>;
  }

  return (
    <>
      {cast.map(item => (
        <>
          <img src="" alt="" />
          <h1>{}</h1>
          <p>{}</p>
        </>
      ))}
    </>
  );
};
export default Cast;
