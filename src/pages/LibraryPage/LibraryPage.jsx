import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import css from '../NotFoundPage/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Library page</h1>
        <Gallery />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default NotFoundPage;
