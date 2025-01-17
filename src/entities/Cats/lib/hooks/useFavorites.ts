import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../model/catsSlice";
import { RootState } from "@/app/config/store";
import { Cats } from "../types";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.cats);

  const isFavorite = (cat: Cats) => favorites.some((fav) => fav.id === cat.id);

  const handleToggleFavorite = (cat: Cats) => {
    dispatch(toggleFavorite(cat));
  };

  return { favorites, isFavorite, handleToggleFavorite };
};
