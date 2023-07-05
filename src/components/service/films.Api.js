import axios from 'axios';
const KEY = '9a877f1ef77873a542041d3a92fb932d';

export const fetchFilms = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchFilms = async value => {
  try {
    const results = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${value}&include_adult=false&language=en-US&page=1`
    );

    return results.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchInfoFilm = async id => {
  try {
    const results = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );

    return results.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreditsFilm = async id => {
  try {
    const results = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    console.log(results.data);
    return results.data;
  } catch (error) {
    console.log(error);
  }
};
