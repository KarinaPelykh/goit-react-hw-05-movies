import { fetchCreditsFilm } from 'components/service/films.Api';
import { useHttp } from 'components/hooks/useHttp';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchCreditsFilm, movieId);

  if (!cast || cast.length === 0) {
    return <p>We don`t have any cast for this movie.</p>;
  }

  return (
    <>
      {cast.map(item => (
        <div key={item.id}>
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                : `https://www.svgrepo.com/show/509283/user.svg`
            }
            alt={item.name}
            width={300}
          />
          <h1>{item.name}</h1>
          <p>{item.character}</p>
        </div>
      ))}
    </>
  );
};
export default Cast;
