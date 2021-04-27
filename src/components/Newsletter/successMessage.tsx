import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.scss';

export function successMessage({ close }) {
    return (
        <>
            <div className={styles.messageContent}>
                <div className={styles.contentMessageDone}>
                    <span>Seu e-mail foi cadastrado com sucesso!</span>
                    <p>
                        A partir de agora você receberá as novidade e ofertas exclusivas.
                    </p>
                </div>
                <div className="content_button">
                    <button type="button" onClick={close}>
                        Cadastrar novo e-mail!
            </button>
                </div>
            </div>
        </>
    );
}

successMessage.propTypes = {
    close: PropTypes.func.isRequired
}