// css
import styles from './NotFound.module.css';


const NotFound = () => {

  return(
    <div className={styles.not_found_wrap}>
      <div className={styles.fof}>
        <h1 className={styles.fof_h1}>Error 404</h1>
      </div>
    </div>
  )

}


export default NotFound;