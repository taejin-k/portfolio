// css
import styles from './Alert.module.css';


const Alert = () => {

  return(
    <div className={styles.not_found_wrap}>
      <div className={styles.fof}>
        <h1 className={styles.fof_h1}>더 큰 화면에서 이용해주세요</h1>
      </div>
    </div>
  )

}


export default Alert;