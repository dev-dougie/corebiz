import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { useCart } from '../../context/CartContext'
import { formatPriceToRenderization } from '../../utils/formatPriceToRenderization'
import { getStars } from '../../utils/getStars';
import style from './style.module.scss'

type Product = {
    id: number;
    name: string;
    stars: number;
    image: string;
    listPrice: number;
    newPrice: number;
    installments: Array<Object>,
    installmentsQuantity: number,
    installmentsValue: number
}

type ProductList = {
    products: Product[];
}

export function Product({ products }: ProductList) {

    const { incrementCart } = useCart();

    return (
        <div className={style.products}>
            <h4>Mais vendidos</h4>

            <hr />

            <ul>
                <BiChevronLeft size={32} cursor="not-allowed" />
                {
                    products.map(prod => {
                        return (
                            <li key={prod.id}>
                                <div>
                                    <img src={prod.image} alt={prod.name} />
                                    <span>{prod.name}</span>
                                    <span>{getStars(prod.stars, MdStar, MdStarBorder)}</span>

                                    {
                                        prod.listPrice === null ?
                                            <span style={{ visibility: 'hidden' }}>underfined</span> :
                                            <span className={style.lastValue}>de {formatPriceToRenderization(prod.listPrice / 100)}</span>
                                    }

                                    <p>por {prod.newPrice}</p>

                                    {
                                        prod.installments.length !== 0 ? <span style={{ textTransform: 'none' }}>ou em {prod.installmentsQuantity}x de {prod.installmentsValue}</span> : null
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
    )


}