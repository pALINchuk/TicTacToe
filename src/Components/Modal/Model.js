import styles from './Modal.module.css'
import {useState} from "react";

const Modal = ({onContinue, headerMessage, inputMessage, buttonMessage}) => {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    return <div className={styles.modal_overlay}>
        <div className={styles.modal_wrapper}>
            <h1 className={styles.modal_header}>{headerMessage}</h1>
            <input
                className={styles.modal_input}
                type="text"
                placeholder={inputMessage}
                onChange={(e) => inputChangeHandler(e)}
                value={inputValue}
            />
            <button
                className={styles.modal_button}
                onClick={(e) => onContinue(e, inputValue)}
            >{buttonMessage}</button>
        </div>
    </div>
}

export default Modal