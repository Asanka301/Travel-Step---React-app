import { Outlet } from "react-router-dom";
import AppNav from "./AppNav.jsx";
import Logo from "./Logo.jsx";
import styles from "./Sidebar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright {new Date().getFullYear()} by travel step.
        </p>
      </footer>
    </div>
  );
}
