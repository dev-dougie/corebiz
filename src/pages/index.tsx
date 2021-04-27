import Head from 'next/head'
import { Banner } from '../components/Banner';
import { Product } from '../components/Product';
import { Newsletter } from '../components/Newsletter';
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { formatPriceToRenderization } from '../utils/formatPriceToRenderization';
import getQuantity from '../utils/getQuantity';
import getValue from '../utils/getValue';


type Product = {
    id: number;
    name: string;
    stars: number;
    image: string;
    listPrice: number;
    newPrice: number;
    installments: Array<Object>;
    installmentsQuantity: number;
    installmentsValue: number;
}

type ProductList = {
    products: Product[];
}

export default function Home({ products }: ProductList) {

    return (
        <>
            <Head>
                <title>Home | Corebiz</title>
            </Head>

            <Banner />

            <Product products={ products } />

            <Newsletter />
        </>
    )
}


//Static Side Generator
export const getStaticProps: GetStaticProps = async () => {

    const { data } = await api.get('products')

    //Formatting and validating data on server side
    const products = data.map(product => {

        return {
            id: product.productId,
            name: product.productName,
            stars: product.stars,
            image: product.imageUrl,
            listPrice:product.listPrice,
            newPrice: formatPriceToRenderization(product.price / 100),
            installments: product.installments,
            installmentsQuantity:getQuantity(product),
            installmentsValue: formatPriceToRenderization(getValue(product) / 100)
        }
    })

    return {
        props: {
            products
        }
    }
}


