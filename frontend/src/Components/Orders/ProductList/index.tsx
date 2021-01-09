import './styles.css';
import { Product } from '../../../Models/Product';
import ProductCard from './ProductCard/index';

type Props = {
    products: Product[];
}

function ProductList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={ product.id } product={ product } />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
