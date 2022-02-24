export interface Product {
  id: string;
  title: string;
  img?: string;
}

export type ProductCardProps = {
  children?: React.ReactElement | React.ReactElement[];
  product: Product;
};

export type ProductContextProps = {
  product: Product;
  counter: number;
  increasedBy: (value: number) => void;
};

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
}
