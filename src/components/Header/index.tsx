import { Cart } from '../Cart';
import style from './styles.module.scss';

export function Header() {

    const handleSubmit = e => e.preventDefault();

    return (
        <header className={style.headerContainer}>

            <div className={style.hamburguer}>
                <img src="/hamburguer.svg" alt="Menu" />
            </div>

            <img src="/logo.svg" alt="Corebiz" className={style.logo} />

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="O que você está procurando?" />
                <button type="submit"><img src="/search.svg" alt="Pesquisar" /></button>
            </form>

            <a href="#"><img src="/account.svg" alt="Minha conta" /></a>

            <Cart />

        </header>
    )
}