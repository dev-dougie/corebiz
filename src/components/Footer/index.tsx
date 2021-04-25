import style from './styles.module.scss'

export function Footer() {
    return (
        <div className={style.footerWrapper}>
            <div className={style.localization}>
                <h3>Localização</h3>
                <hr />
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8 <br />

                Alphavile SP <br />

                brasil@corebiz.ag <br />

                +55 11 3090 1039 <br />
                </p>
            </div>

            <div className= {style.contact}>
                <a href = ""><img src="/email.svg" alt="Email"/> Entre em contato</a>
                <a href=""><img src="/headset.svg" alt="Contato"/> Fale com o nosso consultor online</a>
            </div>

            <div className={style.copyright}>
                <div>
                    <h5>Created by</h5>
                    <img src="/logo-footer.svg" alt="Corebiz" />
                </div>
                <div>
                    <h5>Power by</h5>
                    <img src="/vtex-footer.svg" alt="VTEX" />
                </div>

            </div>
        </div>
    )
}