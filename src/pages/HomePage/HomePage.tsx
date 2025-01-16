import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CatsCard from "../../entities/Cats/ui/CatsCard/CatsCard";
import { RootState } from "../../app/config/store";
import { fetchCatsStart } from "../../entities/Cats/model/catsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const { items: cats, loading, error } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(fetchCatsStart());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      {cats.map((cat) => (
        <CatsCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default HomePage;
