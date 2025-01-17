import classNames from "classnames";

import BlockHeart from "@/shared/svg/BlockHeart";
import HoverHeart from "@/shared/svg/HoverHeart";
import ActiveHeart from "@/shared/svg/ActiveHeart";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { WidthSize } from "./constants";

const Button = (props: ButtonProps) => {
  const { text, variant = "main", iconType, className, width = "120", isActive, ...rest } = props;
  const iconMap = {
    blockHeart: <BlockHeart />,
    hoverHeart: <HoverHeart />,
    activeHeart: <ActiveHeart />,
  };
  const content =
    variant === "main" ? text : iconType ? iconMap[iconType] : null;

  const buttonClass = classNames(
    styles.button,
    styles[variant],
    variant === "main" ? WidthSize[width] : null,
    isActive && styles.active,
    className
  );

  return (
    <button className={buttonClass} {...rest}>
      {content}
    </button>
  );
};

export default Button;
