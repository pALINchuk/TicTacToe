import styles from './Registration.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegistrationService} from "../../services/RegistrationService";

const Registration = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const inputChangeHandler = (e, field) => {
        if(field === 'username'){
            setUsername(e.target.value)
        } else if(field === 'email'){
            setEmail(e.target.value)
        } else if(field === 'password'){
            setPassword(e.target.value)
        }
    }

    const registrationHandler = async(e) => {
        e.preventDefault()
        try{
            const result = await RegistrationService(username, email, password)
            localStorage.setItem('token', result.data.data.access_token)
            console.log(result)

            setUsername('')
            setEmail('')
            setPassword('')
            navigate('/')
        }
        catch (error){
            console.log(error)
        }
    }

    return <div className={styles.registration_wrapper}>
        <div>
            <h1>Реєстрація</h1>
            <input
                className={styles.registration_form_input}
                type="text"
                placeholder={'Ім\'я'}
                onChange={(e) => inputChangeHandler(e, 'username')}
                value={username}
            />
            <input
                className={styles.registration_form_input}
                type="text"
                placeholder={'Пошта'}
                onChange={(e) => inputChangeHandler(e, 'email')}
                value={email}
            />
            <input
                className={styles.registration_form_input}
                type="text"
                placeholder={'Пароль'}
                onChange={(e) => inputChangeHandler(e, 'password')}
                value={password}
            />
            <button
                className={styles.registration_form_button}
                onClick={registrationHandler}
            >
                Зареєструватись
            </button>
            <p className={styles.registration_form_blockToLogin}>Вже маєте існуючий акаунт? <NavLink to='/login'>Увійдіть.</NavLink></p>
        </div>
    </div>
}

export default Registration