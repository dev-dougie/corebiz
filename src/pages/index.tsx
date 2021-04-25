import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Newsletter } from '../components/Newsletter';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';
import style from './home.module.scss';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

type Product = {
    id: number;
    name: string;
    stars: number;
    image: string;
    lastPrice: string;
    newPrice: string;
    //installments: Array<Object>;
}

type ProductList = {
    products: Product[];
}

export default function Home({ products }: ProductList) {

    const { incrementCart } = useCart();

    return (
        <>
            <Head>
                <title>Home | Corebiz</title>
            </Head>

            <div className={style.banner}>

                <div className={style.leftBanner}>
                    <h2>Olá, o que você está buscando?</h2>
                    <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                </div>

                <div className={style.rightBanner} />
            </div>

            <div className={style.bestSellers}>
                <h4>Mais vendidos</h4>

                <hr />

                <ul>
                    <BiChevronLeft size={32} cursor="not-allowed" />
                    {
                    products.map(prod => {
                        return (
                            <li key={ prod.id }>
                                <div>
                                    <img src={ prod.image } alt={ prod.name } />
                                    <span>{ prod.name }</span>
                                    <span>Nota { prod.stars }</span>
                                    
                                    {prod.lastPrice === null ?
                                        <p>por R${ prod.newPrice }</p>
                                        : (
                                            <>
                                                <span className={ style.lastValue }>De R$ { prod.lastPrice }</span>
                                                <p>por R${ prod.newPrice }</p>
                                                {
                                                    prod.newPrice !== '' ? <span style={{ textTransform: 'none' }}>ou em 0x de R$000,00</span> : null
                                                }
                                            </>
                                        )
                                    }
                                    <button onClick={() => incrementCart()}>Comprar</button>
                                </div>
                            </li>
                        )
                    }
                    )}
                    <BiChevronRight size={32} cursor="not-allowed" />
                </ul>
            </div>

            <Newsletter />
        </>
    )
}

//Static Side Generator
export const getStaticProps: GetStaticProps = async () => {

    const { data } = await api.get('products')

    //Formatting data on server side
    const products = data.map(product => {
        const { installments } = product

        return {
            id: product.productId,
            name: product.productName,
            stars: product.stars,
            image: product.imageUrl,
            lastPrice: product.lastPrice,
            newPrice: product.price
        }
    })

    return {
        props: {
            products
        }
    }
}
