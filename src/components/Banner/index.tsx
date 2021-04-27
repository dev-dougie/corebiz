import style from './styles.module.scss';

export function Banner() {
    return (

        <div className={style.banner}>

            <div className={style.leftBanner}>
                <h2>Olá, o que você está buscando?</h2>
                <h1>Criar ou migrar seu <br /> e-commerce?</h1>
            </div>

            <div className={style.rightBanner} />
        </div>

    )
}