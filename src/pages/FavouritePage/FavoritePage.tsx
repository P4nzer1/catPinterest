import CatsCard from "../../entities/Cats/ui/CatsCard/CatsCard";
import styles from "./FavoritePage.module.scss";
import { useFavorites } from "../../entities/Cats/lib/hooks/useFavorites";
import Text from "../../shared/ui/Text/Text";

const FavoritesPage = () => {
  const { favorites, handleToggleFavorite } = useFavorites();

  if (!favorites.length) {
    return <Text className="h1" as="h1" size='l' >Список любимых котиков пуст, пожалуйста, добавьте котика.</Text>
  }

  return (
    <div className={styles.wrapper}>
      {favorites.map((cat) => (
        <CatsCard
          key={cat.id}
          cat={cat}
          isFavorite={true} 
          onToggleFavorite={() => handleToggleFavorite(cat)} 
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
