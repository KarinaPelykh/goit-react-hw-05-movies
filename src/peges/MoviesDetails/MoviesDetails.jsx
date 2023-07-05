import { fetchInfoFilm } from 'components/service/films.Api';
import { useHttp } from 'components/hooks/useHttp';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
const MoviesDetails = () => {
  const { movieId } = useParams();
  const [filmInfo] = useHttp(fetchInfoFilm, movieId);
  const vote_average = Math.ceil(filmInfo.vote_average * 10);
  const location = useLocation();

  return (
    <>
      <Link to={location?.state?.from || '/ '}>
        <button>Go back</button>
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}
          alt={filmInfo.title}
          width="300"
        />
      </div>
      <div style={{}}>
        <h1>{filmInfo.title}</h1>
        <p>User Score:{vote_average}%</p>
        <h2>Overview</h2>
        <p>{filmInfo.overview}</p>
        <h3>Genres</h3>
        <div>
          {filmInfo.genres ? (
            filmInfo.genres.map(item => <p key={item.id}>{item.name}</p>)
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;
