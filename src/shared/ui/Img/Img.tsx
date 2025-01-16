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
  const customStyles = {
    width: `${width}px`,
    height: `${height}px`,
    border,
  };

  return (
    <img
      src={src}
      alt={alt}
      style={customStyles}
      className={classNames(styles.image, additionalClasses)}
      {...rest}
    />
  );
};

export default Img;
