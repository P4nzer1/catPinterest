import classNames from "classnames";

import { ImgProps } from "./types";
import { SizeClass } from "./constants";
import styles from "./Img.module.scss";

const Img = (props: ImgProps) => {
  const {
    src,
    alt,
    width = "225",
    height = "225",
    border = "none",
    className,
    ...rest
  } = props;

  const additionalClasses = [
    SizeClass[width],
    SizeClass[height],
    className,
    border,
  ];

  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.image, additionalClasses)}
      {...rest}
    />
  );
};

export default Img;
