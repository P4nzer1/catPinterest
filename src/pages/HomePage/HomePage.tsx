import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState } from "../../app/config/store";
import { fetchCatsStart } from "../../entities/Cats/model/catsSlice";
import CatsCard from "../../entities/Cats/ui/CatsCard/CatsCard";
import styles from "./HomePage.module.scss";
import CatsLoadMore from "../../entities/Cats/ui/CatsLoadMore/CatsLoadMore";
import { useFavorites } from "../../entities/Cats/lib/hooks/useFavorites";
import Spiner from "../../shared/ui/Spiner/Spiner";

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: cats, loading, error } = useSelector(
    (state: RootState) => state.cats
  );

  const { isFavorite, handleToggleFavorite } = useFavorites();

  useEffect(() => {
    if (!cats.length) {
      dispatch(fetchCatsStart()); 
    }
  }, [dispatch, cats.length]);
  //MEMO?
  if (loading) return <Spiner/>;
  if (error) return <div>Ошибка:{error}</div>;

  return (
    <div className={styles.wrapper}>
      {cats.map((cat) => (
        <CatsCard
          key={cat.id}
          cat={cat}
          isFavorite={isFavorite(cat)} 
          onToggleFavorite={() => handleToggleFavorite(cat)} 
        />
      ))}
      <CatsLoadMore />
    </div>
  );
};

export default HomePage;
