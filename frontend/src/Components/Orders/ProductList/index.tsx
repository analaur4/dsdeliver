import './styles.css';
import { Product } from '../../../Models/Product';
import ProductCard from './ProductCard/index';
import { checkIsSelected } from '../helpers';

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductList({ products, onSelectProduct, selectedProducts }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                        key={ product.id } 
                        product={ product } 
                        onSelectProduct={ onSelectProduct }
                        isSelected={ checkIsSelected(selectedProducts, product) }
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
