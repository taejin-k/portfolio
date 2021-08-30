// css
import styles from './NotFound.module.css';


const NotFound = () => {

  return(
    <div className={styles.not_found_wrap}>
      <div className={styles.fof}>
        <h1 className={styles.fof_h1}>잘못 된 페이지입니다</h1>
      </div>
    </div>
  )

}


export default NotFound;