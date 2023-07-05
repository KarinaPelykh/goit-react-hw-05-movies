import { fetchReviewsFilm } from 'components/service/films.Api';
import { useHttp } from 'components/hooks/useHttp';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviwes] = useHttp(fetchReviewsFilm, movieId);
  return (
    <>
      {reviwes.map(item => (
        <>
          <h1>Author:{}</h1>
          <p>{}</p>
        </>
      ))}
    </>
  );
};
