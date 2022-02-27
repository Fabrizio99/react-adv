import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export type ProductContextProps = {
  product: Product;
  counter: number;
  increasedBy: (value: number) => void;
};

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
