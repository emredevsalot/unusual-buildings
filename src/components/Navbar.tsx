import { NavLink } from "react-router-dom";
import styles from "../styles";

const Navbar = () => {
  return (
    <nav className="flex min-h-[10vh] items-center bg-secondary">
      <div
        className={`${styles.innerWidth} flex items-center justify-center gap-8`}
      >
        <p className="text font-secondary text-xl text-primary">
          <NavLink to="/">Homepage</NavLink>
        </p>
        <p className="text font-secondary text-xl text-primary">
          <NavLink to="/services">Services</NavLink>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
