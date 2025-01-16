import { useSelector, useDispatch } from "react-redux";
import styles from "./CatsCard.module.scss";
import { Cats } from "../../lib/types";
import { RootState } from "../../../../app/config/store";
import {
  fetchCatsSuccess,
  fetchCatsFailure,
} from "../../model/catsSlice";

interface CatsCardProps {
  cat: Cats; 
}

const CatsCard = ({ cat }: CatsCardProps) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    state.cats.items.some((favoriteCat) => favoriteCat.id === cat.id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(fetchCatsFailure(cat.id)); 
    } else {
      dispatch(fetchCatsSuccess([cat]));
    }
  };

  return (
    <div className={styles.card}>
      <img src={cat.url} alt="Cat" className={styles.image} />
    </div>
  );
};

export default CatsCard;
