import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);
  const [value, setValue] = useState('');

  const hendelSubmit = e => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
    setValue('');
  };
  return (
    <form onSubmit={hendelSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};
