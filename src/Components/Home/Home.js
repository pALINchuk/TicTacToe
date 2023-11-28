import styles from './Home.module.css'
import image from '../../Assets/thumbnail.svg'
import Modal from "../Modal/Model";
import {useState} from "react";
import {CreateLobbyService} from "../../services/CreateLobbyService";
import {JoinLobbyService} from "../../services/JoinLobbyService";

const Home = () => {
    const [showFirstModal, setShowFirstModal] = useState(false)
    const [showSecondModal, setShowSecondModal] = useState(false)

    const buttonFirstModalHandler = (e) => {
        e.preventDefault()
        setShowFirstModal(true)
    }

    const buttonSecondModalHandler = (e) => {
        e.preventDefault()
        setShowSecondModal(true)
    }

    const onContinueFirstModalHandler = async(e, input) => {
        setShowFirstModal(false)
        try{
            const token = localStorage.getItem('token');
            const result = await CreateLobbyService(input, token)

            console.log(result)
        }
        catch (error){
            console.log(error)
        }
    }

    const onContinueSecondModalHandler = async(e, input) => {
        setShowSecondModal(false)
        try{
            const token = localStorage.getItem('token');
            const result = await JoinLobbyService(input, token)

            console.log(result)
        }
        catch (error){
            console.log(error)
        }
    }

    return <div className={styles.home_wrapper}>
        <div className={styles.home_playpad}>
            <h1>Грати Хрестики-Нулики</h1>
            <div
                className={styles.home_buttonsBlock}
            >
                <div>
                    <img src={image} alt="Tic-Tac-Toe"/>
                    <div>
                        <div className={styles.home_fieldNumber}>3x3</div>
                        <div>?</div>
                    </div>
                </div>
                <div className={styles.home_buttons}>
                    <button onClick={buttonFirstModalHandler}>Створити Лоббі</button>
                    <button onClick={buttonSecondModalHandler}>Приєднатись до гри</button>
                </div>
            </div>
        </div>
        {showFirstModal ? <Modal
            onContinue={onContinueFirstModalHandler}
            headerMessage={'Якою фігурою граєте?'}
            inputMessage={'фігура'}
            buttonMessage={'Продовжити'}
        /> : null}
        {showSecondModal ? <Modal
            onContinue={onContinueSecondModalHandler}
            headerMessage={'Який код гри?'}
            inputMessage={'код'}
            buttonMessage={'Продовжити'}
        /> : null}
    </div>
}

export default Home