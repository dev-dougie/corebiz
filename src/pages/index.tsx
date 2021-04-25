import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Newsletter } from '../components/Newsletter';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';
import style from './home.module.scss';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { formatPriceToRenderization } from '../utils/formatPriceToRenderization';


export default function Home({ products }) {

    const { incrementCart } = useCart();

    return (
        <>
            <Head>
                <title>Home | Corebiz</title>
            </Head>

            <div className={style.banner}>
                <div className={style.leftPiece}>
                    <h2>Olá, o que você está buscando?</h2>
                    <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                </div>
                <div className={style.rightPiece} />
            </div>

            <div className={style.bestSellers}>
                <h4>Mais vendidos</h4>

                <hr />
                <ul>
                    <BiChevronLeft size={32} />
                    {products.map(prod => {
                        return (
                            <li key={prod.id}>
                                <div>
                                    <img src={prod.image} alt={prod.name} />
                                    <span>{prod.name}</span>
                                    <span>Nota {prod.stars}</span>
                                    {prod.lastPrice === null ?
                                        <p>Por R$ {prod.newPrice}</p>
                                        : (
                                            <>
                                                <span className={style.lastValue}>De R$ {prod.lastPrice}</span>
                                                <p>Por R$ {prod.newPrice}</p>
                                            </>
                                        )
                                    }
                                    <button onClick={() => incrementCart()}>Comprar</button>
                                </div>
                            </li>
                        )
                    })}
                    <BiChevronRight size={32} />
                </ul>
            </div>

            <Newsletter />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const { data } = await api.get('products')


    const products = data.map(product => {

        return {
            id: product.productId,
            name: product.productName,
            stars: product.stars,
            image: product.imageUrl,
            lastPrice: product.lastPrice,
            newPrice: product.price,
        }
    })

    return {
        props: {
            products
        }
    }

}
