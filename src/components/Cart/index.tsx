import { useCart } from '../../context/CartContext'
import style from './styles.module.scss'

export function Cart() {

    const { item } = useCart();

    return (
        <div className={style.cartContainer}>
            <img src="/cart.svg" alt="Carrinho" />
            <span className={style.cartItens}>{item}</span>
        </div>
    )
}