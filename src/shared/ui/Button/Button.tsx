import classNames from "classnames";

import BlockHeart from "../../svg/BlockHeart";
import HoverHeart from "../../svg/HoverHeart";
import ActiveHeart from "../../svg/ActiveHeart";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { WidthSize } from "./constants";

const Button = (props: ButtonProps) => {
  const { text, variant = "main", iconType, className, width='120' , ...rest } = props;
  const iconMap = {
    blockHeart: <BlockHeart />,
    hoverHeart: <HoverHeart />,
    activeHeart: <ActiveHeart />,
  };
  const content =
    variant === "main" ? text : iconType ? iconMap[iconType] : null;
  const buttonClass = classNames(styles.button, styles[variant], WidthSize[width], className);

  return (
    <button className={buttonClass} {...rest}>
      {content}
    </button>
  );
};

export default Button;
