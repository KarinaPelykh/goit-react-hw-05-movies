import { useHttp } from 'components/hooks/useHttp';
import { fetchSearchFilms } from 'components/service/films.Api';
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState('');
  const [films] = useHttp(fetchSearchFilms, query);
  const filmList = films.results;

  const hendelSubmit = e => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
    setValue('');
  };

  return (
    <>
      <form onSubmit={hendelSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {filmList?.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
