import styles from "./Img.module.scss";
import { Width, Height } from "./types";

export const SizeClass: Record<Width | Height, string> = {
  "225": styles.size225,
  "300": styles.size300,
};
