import { useState } from 'react';
import style from './styles.module.scss';

export function Newsletter() {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null)


    const validateFields = () => {
        console.log({
            "name": name,
            "email": email
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className={style.newsContainer}>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form onSubmit = {handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    required
                    onChange = {e => setName(e.target.value)} />
                <input
                    type="email"
                    placeholder="Digite seu email"
                    required
                    onChange = {e => setEmail(e.target.value)} />
                <button 
                type="submit"
                onClick = {validateFields}>Eu quero!</button>
            </form>
        </div>
    )
}