import { Link, useLocation } from 'react-router-dom';

export const MoviList = ({ filmList }) => {
  const location = useLocation();
  return (
    <ul>
      {filmList?.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
