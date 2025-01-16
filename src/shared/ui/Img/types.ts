import { ImgHTMLAttributes } from "react";

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string; 
  width?: Width; 
  height?: Height; 
  border?: string; 
  className?: string; 
}

export type Width = '225' | '300';

export type Height = '225' | '300';