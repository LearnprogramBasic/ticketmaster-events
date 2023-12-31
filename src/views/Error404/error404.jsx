// import assets from "../../assets/error404.png";
import styles from '../../views/Error404/Error404.module.css'
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div className={styles.container}>
      {/* <img src={assets}alt="Error404" /> */}
      <h3 className={styles.title}>{error.status}ops!</h3>
      <p className={styles.description}>{error.data} </p>
    </div>
  );
};

export default Error404;
