import { useState } from "react";

import { Cats } from "../../lib/types";
import Img from "@/shared/ui/Img/Img";
import Button from "@/shared/ui/Button/Button";
import styles from "./CatsCard.module.scss";

interface CatsCardProps {
  cat: Cats;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const CatsCard = ({ cat, isFavorite, onToggleFavorite }: CatsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const iconType = isButtonHovered
    ? "hoverHeart"
    : isFavorite
    ? "activeHeart"
    : "blockHeart";

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Img src={cat.url} alt="Cat" className={styles.image} />

      {isHovered && (
        <Button
          variant="icon"
          iconType={iconType}
          onClick={onToggleFavorite}
          className={styles.button}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        />
      )}
    </div>
  );
};

export default CatsCard;
