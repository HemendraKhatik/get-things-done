import React from 'react'
import styles from './index.module.css';

function Button({ children, onClick, style, type,...rest }) {

    if (type === "fill") {
        return <button style={style} onClick={onClick} className={styles.fillContainer} {...rest}>{children}</button>;
    }
    return <button style={style} onClick={onClick} className={styles.container} {...rest}>{children}</button>;

}

export default Button;