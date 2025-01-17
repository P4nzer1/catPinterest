import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../app/config/store";
import {
  fetchCatsStart,
  fetchCatsSuccess,
  saveRemainingCats,
} from "../../model/catsSlice";
import Link from "../../../../shared/ui/Link/Link";
import Text from "../../../../shared/ui/Text/Text";
import styles from "./CatsLoadMore.module.scss";

const CatsLoadMore = () => {
  const dispatch = useDispatch();
  const { remainingCats } = useSelector((state: RootState) => state.cats);

  const handleLoadMore = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (remainingCats.length > 0) {
      dispatch(fetchCatsSuccess(remainingCats));
      dispatch(fetchCatsStart());
      dispatch(saveRemainingCats([]));
    } else {
      dispatch(fetchCatsStart());
    }
  };

  return (
    <div className={styles.container}>
      <Text color="primary">
        <Link href="#" onClick={handleLoadMore} className={styles.link}>
          ...загружаем еще котиков...
        </Link>
      </Text>
    </div>
  );
};

export default CatsLoadMore;
