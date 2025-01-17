import { Cats } from "../types";
export declare const useFavorites: () => {
    favorites: Cats[];
    isFavorite: (cat: Cats) => boolean;
    handleToggleFavorite: (cat: Cats) => void;
};
