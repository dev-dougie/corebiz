import { Cart } from '../Cart';
import style from './styles.module.scss';

export function Header(){
    return (
        <header className = {style.headerContainer}>
            <div className= {style.hamburguer}>
                <img src="/hamburguer.svg" alt="Menu"/>
            </div>

            <img src="/logo.svg" alt="Corebiz" className = {style.logo}/>

             <form action="POST">
                 <input type="text" placeholder = "O que você está procurando?"/>
                 <button type = "submit"><img src="/search.svg" alt="Pesquisar"/></button>
             </form>

            <a href="#">Minha conta</a>

            <Cart/>
        </header>
    )
}