import { Cats } from "../../lib/types";
interface CatsCardProps {
    cat: Cats;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}
declare const CatsCard: ({ cat, isFavorite, onToggleFavorite }: CatsCardProps) => import("react/jsx-runtime").JSX.Element;
export default CatsCard;
