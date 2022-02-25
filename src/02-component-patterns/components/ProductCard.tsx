import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export type Props = {
  children?: React.ReactElement | React.ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increasedBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increasedBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
