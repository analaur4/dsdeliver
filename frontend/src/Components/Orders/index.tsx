import './styles.css';
import StepsHeader from './StepsHeader/index';
import ProductList from './ProductList/index';
import { fetchProducts } from '../../API';
import { Product } from '../../Models/Product';
import { useState, useEffect } from 'react';
import OrderLocation from './OrderLocation/index';
import { OrderLocationData } from '../../Models/OrderLocationData';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts().then(res => setProducts(res.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList products={ products } />
            <OrderLocation onChangeLocation={ location => setOrderLocation(location) } />
        </div>
    )
}

export default Orders;
