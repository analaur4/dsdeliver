import './styles.css';
import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader/index';
import ProductList from './ProductList/index';
import { fetchProducts, saveOrder } from '../../API';
import { Product } from '../../Models/Product';
import { useState, useEffect } from 'react';
import OrderLocation from './OrderLocation/index';
import { OrderLocationData } from '../../Models/OrderLocationData';
import OrderSummary from './OrderSummary/index';
import { checkIsSelected } from './helpers';
import Loader from '../Loader/index';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const [isLoading, setIsLoading] = useState(true);

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts().then(res =>setProducts(res.data))
        .then(() => setIsLoading(loading => !loading))
        .catch(error => console.log(error))
    }, []);

    
    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
    
        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((res) => {
          toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`);
          setSelectedProducts([]);
        })
        .catch(() => {
            toast.warning('Erro ao enviar pedido');
        })
    }

    return (
        <div className="orders-container">
            { isLoading ? <Loader /> : null }
            <StepsHeader />
            <ProductList products={ products } onSelectProduct={ handleSelectProduct } selectedProducts={ selectedProducts } />
            <OrderLocation onChangeLocation={ location => setOrderLocation(location) } />
            <OrderSummary amount={ selectedProducts.length } totalPrice={ totalPrice } onSubmit={ handleSubmit } />
        </div>
    )
}

export default Orders;
