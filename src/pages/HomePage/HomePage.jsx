import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import css from '../HomePage/HomePage.module.css';

import { useState, useEffect } from 'react';

import { fetchMovies } from '../../services/apiService';
// import MoviesList from 'components/MoviesList/MoviesList';

// const Movies = () => {
//   const [state, setState] = useState({
//     items: [],
//     loading: false,
//     error: null,
//   });

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setState(prevState => ({
//           ...prevState,
//           loading: true,
//           error: null,
//         }));
//         const result = await getMovies();
//         console.log(result);
//         setState(prevState => {
//           return {
//             ...prevState,
//             items: [...result.results],
//           };
//         });
//       } catch (error) {
//         setState(prevState => ({
//           ...prevState,
//           error,
//         }));
//       } finally {
//         setState(prevState => {
//           return {
//             ...prevState,
//             loading: false,
//           };
//         });
//       }
//     };

//     fetchMovies();

//     console.log('запускаємо useEffect');
//   }, [setState]);

//   // const { items, loading, error } = state;

//   // return (
//   //   <div>
//   //     {items.length > 0 && <MoviesList items={items} />}
//   //     {loading && <p>...loading</p>}
//   //     {error && <p>...load failed</p>}
//   //   </div>
//   // );
// };
// export default Movies;

const HomePage = props => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await fetchMovies();
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: [...result],
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchMoviesList();

    console.log('запускаємо useEffect');
  }, [setState]);
  const { items, loading, error } = state;
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Home page</h1>
        {items.length > 0 && <Gallery items={items} />}
        {loading && <p>...loading</p>}
        {error && <p>...load failed</p>}
        {/* <Gallery /> */}
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default HomePage;
