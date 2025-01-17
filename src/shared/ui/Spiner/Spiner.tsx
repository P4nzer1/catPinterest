import styles from './Spiner.module.scss'

const Spiner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spiner;