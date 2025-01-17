import { AnchorHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Link.module.scss";
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const Link = (props: LinkProps) => {
  const { children, className, ...rest } = props;
  const linkClass = classNames(styles.link, className);
  return (
    <>
      <a className={linkClass} {...rest}>
        {children}
      </a>
    </>
  );
};

export default Link;
