import styles from './Auth.module.css'
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {AuthService} from "../../services/AuthService";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const inputChangeHandler = (e, field) => {
        if(field === 'email'){
            setEmail(e.target.value)
        } else if(field === 'password'){
            setPassword(e.target.value)
        }
    }

    const authHandler = async(e) => {
        e.preventDefault()
        try{
            const result = await AuthService(email, password)
            localStorage.setItem('token', result.data.data.access_token)
            console.log(result)

            setEmail('')
            setPassword('')
            navigate('/')
        }
        catch (error){
            console.log(error)
        }
    }

    return <div className={styles.auth_wrapper}>
        <div>
            <h1>Вхід в систему</h1>
            <input
                className={styles.auth_form_input}
                type="text"
                placeholder={'Пошта'}
                onChange={(e) => inputChangeHandler(e, 'email')}
                value={email}
            />
            <input
                className={styles.auth_form_input}
                type="text"
                placeholder={'Пароль'}
                onChange={(e) => inputChangeHandler(e, 'password')}
                value={password}
            />
            <button
                className={styles.auth_form_button}
                onClick={authHandler}
            >
                Увійти
            </button>
            <p className={styles.auth_form_blockToRegistration}>Немає акаунту? <NavLink to='/registration'>Зареєструйся.</NavLink></p>
        </div>


    </div>
}

export default Auth