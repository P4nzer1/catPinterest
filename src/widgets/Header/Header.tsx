import Button from "../../shared/ui/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Button width='120' text="Все котики" />
      </div>
       <Button width='173' text="Любимые котики" />
    </div>
  );
};

export default Header;
