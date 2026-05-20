import styles from "./Introtext.module.css";

function Introtext() {
	return (
		<div className={styles.introtext}>
			<h2>HI, I AM</h2>
			<h1>Mattias</h1>
			<p className={styles.description}>
				I'm a <span>backend</span> developer
			</p>
			<p className={styles.details}>
				I specialize in building backend systems and APIs.
			</p>
			<div className={styles.skills}>
				<p>C# ASP.NET Core, Node.js Express, and Python Django.</p>
				<p>
					Experience with databases such as MongoDB, MySQL, and
					PostgreSQL
				</p>
			</div>
		</div>
	);
}

export default Introtext;
