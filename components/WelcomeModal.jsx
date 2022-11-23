import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/Home.module.css'

function WelcomeModal() {
    const [modalStyles, setModalStyles] = useState({
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(31, 19, 19)',
        position: 'absolute',
        opacity: 1
    });
    // const modalOpacity = modalStyles.opacity;
    let interval = setInterval(() => {
        setModalStyles((prevStyles) => {
            if (prevStyles.opacity <= 0) {
                clearInterval(interval);
                return { ...prevStyles, display: 'none' }; 
            }
            return { ...prevStyles, opacity: prevStyles.opacity - 0.001 };
        })
    }, 100);
    return (
        <div id='modal' style={modalStyles}>
            {/* <Fade direction='down'> */}
                <h1 className={styles.title}>
                    Welcome to my portfolio
                </h1>
            {/* </Fade> */}
        </div>
    )
}

export default WelcomeModal;
