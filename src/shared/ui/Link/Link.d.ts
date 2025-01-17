import { AnchorHTMLAttributes, ReactNode } from "react";
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
}
declare const Link: (props: LinkProps) => import("react/jsx-runtime").JSX.Element;
export default Link;
