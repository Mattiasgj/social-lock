import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Mail, Laptop, Book, SquareTerminal } from "lucide-react";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.name} to="/">
				Mattias Gil Johansson
			</Link>
			<Link to="https://www.linkedin.com/in/mattias-gil-johansson-2053b4212/">
				LinkedIn
				<img className={styles.icon} src={LinkedIn} alt="LinkedIn" />
			</Link>
			<Link to="/education">
				Education <Book />
			</Link>
			<Link to="/projects">
				Projects <Laptop />
			</Link>
			<Link to="/contact">
				Contact Me <Mail />
			</Link>
			<Link to="https://github.com/Mattiasgj">
				Github
				<img className={styles.icon} src={Github} alt="Github" />
			</Link>
			<Link to="/terminal">
				Terminal <SquareTerminal />
			</Link>
		</nav>
	);
}

export default Navbar;
