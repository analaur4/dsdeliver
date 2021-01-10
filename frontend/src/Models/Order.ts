import { ProductId } from "./ProductId";
import { OrderLocationData } from "./OrderLocationData";

export type Order = {
    products: ProductId[];
} & OrderLocationData;
