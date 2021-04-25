import { useState } from 'react';
import style from './styles.module.scss';
import Axios from 'axios'

type UserData = {
    name: string;
    email: string;
}

export function Newsletter() {

    const URL = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

    const [data, setData] = useState({
        name: '',
        email: ''
    } as UserData)

    //Form POST
    const handleSubmit = e => {
        e.preventDefault();

        Axios.post(URL, {
            name: data.name,
            email: data.email
        }).then(res => console.log(res.data))
    }

    const handleChange = e => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    return (
        <div className={style.newsContainer}>

            <h2>Participe de nossas news com promoções e novidades!</h2>

            <form onSubmit={(e) => handleSubmit(e)} method="POST" >

                <input
                    type="text"
                    placeholder="Digite seu nome"
                    id="name"
                    value={data.name}
                    onChange={(e) => handleChange(e)}
                    title="Preencha este campo"
                    required
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    onChange={(e) => handleChange(e)}
                    title="Preencha este campo"
                    value={data.email}
                    required
                />
                <button type="submit">Eu quero!</button>

            </form>

        </div>
    )
}