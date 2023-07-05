import { fetchReviewsFilm } from 'service/films.Api';
import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviwes] = useHttp(fetchReviewsFilm, movieId);

  if (!reviwes || reviwes.length === 0) {
    return <p>We don`t have any cast for this movie.</p>;
  }
  return (
    <>
      {reviwes.map(item => (
        <div key={item.id}>
          <h1>Author:{item.author}</h1>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  );
};
export default Reviews;
