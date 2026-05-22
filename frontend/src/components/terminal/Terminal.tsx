import styles from "./Terminal.module.css";
import { SquareTerminal } from "lucide-react";
import { useState } from "react";

export function Terminal() {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([
		"Mattias [Version 10.0.19045.7291] (c) MGJ Corporation.",
		"All rights reserved.",
		"",
		"Type 'help' for a list of commands.",
		"",
	]);

	function handleCommand() {
		if (!input.trim()) return;

		let response = "";

		switch (input.toLowerCase()) {
			case "help":
				response = "Available commands: help, skills, projects, clear";
				break;

			case "skills":
				response =
					"C# ASP.NET, Node.js Express, Python Django, Postgresql, Mysql, Mongodb Nosql, React";
				break;

			case "projects":
				response = "Personal website: Github: https://github.com/Mattiasgj/Mattias-web";
				break;
			
			case "clear":
				setHistory([]);
				setInput("");
				return;

			default:
				response = `Unknown command: ${input}`;
		}

		setHistory((prev) => [
			...prev,
			`C:\\Users\\gillm> ${input}`,
			response,
			"",
		]);

		setInput("");
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.topbar}>
				<SquareTerminal />
				Terminal
			</div>

			<div className={styles.terminal}>
				{history.map((line, index) => (
					<div key={index} className={styles.line}>
						{line}
					</div>
				))}

				<div className={styles.commandline}>
					<span>C:\Users\gillm&gt;</span>

					<input
						autoFocus
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleCommand();
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
}
