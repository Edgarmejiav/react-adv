export interface Product {
  id: string;
  img?: string;
  title: string;
}

const product1: Product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};
const product2: Product = {
  id: "2",
  title: "Coffee Mug - meme",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
