import { Cats } from "../../lib/types";
import Img from "../../../../shared/ui/Img/Img";
import styles from "./CatsCard.module.scss";

interface CatsCardProps {
  cat: Cats;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const CatsCard = ({ cat }: CatsCardProps) => {
  return (
    <div className={styles.card}>
      <Img src={cat.url} alt="Cat" className={styles.image} />
    </div>
  );
};

export default CatsCard;
