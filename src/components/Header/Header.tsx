import styles from './Header.module.css'
import icon from '../../assets/icon.svg'

export function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header}>
                <img src={icon} />  
                <h1><span className={styles.to}>to</span><span className={styles.do}>do</span></h1>
            </div>        
        </div>
    )
}