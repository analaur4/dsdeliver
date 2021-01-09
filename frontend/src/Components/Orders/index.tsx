import './styles.css';
import StepsHeader from './StepsHeader/index';
import ProductList from './ProductList/index';
import { fetchProducts } from '../../API';
import { Product } from '../../Models/Product';
import { useState, useEffect } from 'react';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(res => setProducts(res.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList products={products} />
        </div>
    )
}

export default Orders;
