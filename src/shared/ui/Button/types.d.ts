import { ButtonHTMLAttributes } from "react";
export type IconType = "blockHeart" | "hoverHeart" | "activeHeart";
export type VariantType = "main" | "icon";
export type SizeType = "main" | "icon";
export type Width = '120' | '173';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: VariantType;
    iconType?: IconType;
    width?: Width;
    isActive?: boolean;
}
