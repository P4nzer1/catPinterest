import { useNavigate, useLocation } from "react-router-dom";

import Button from "../../shared/ui/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <Button
          width="120"
          text="Все котики"
          onClick={() => onNavigate("/")}
          isActive={location.pathname === "/"}
        />
        <Button
          width="173"
          text="Любимые котики"
          onClick={() => onNavigate("/favourite")}
          isActive={location.pathname === "/favourite"}
        />
      </div>
    </div>
  );
};

export default Header;
