import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState } from "../../app/config/store";
import { fetchCatsStart, fetchCatsSuccess, fetchCatsFailure } from "../../entities/Cats/model/catsSlice";
import CatsCard from "../../entities/Cats/ui/CatsCard/CatsCard";
import styles from "./HomePage.module.scss";
import CatsLoadMore from "../../entities/Cats/ui/CatsLoadMore/CatsLoadMore";

const HomePage = () => {
  const dispatch = useDispatch();

  const { items: cats, loading, error } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(fetchCatsStart());
  }, [dispatch]);

  const toggleFavorite = (catId: string) => {
    const isFavorite = cats.some((favoriteCat) => favoriteCat.id === catId);
    if (isFavorite) {
      dispatch(fetchCatsFailure(catId)); 
    } else {
      const cat = cats.find((c) => c.id === catId);
      if (cat) {
        dispatch(fetchCatsSuccess([cat]));
      }
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles.wrapper}>
      {cats.map((cat) => (
        <CatsCard
          key={cat.id}
          cat={cat}
          isFavorite={cats.some((favoriteCat) => favoriteCat.id === cat.id)}
          onToggleFavorite={() => toggleFavorite(cat.id)}
        />
      ))}
      <CatsLoadMore/>
    </div>
  );
};

export default HomePage;
