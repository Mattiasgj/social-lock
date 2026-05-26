import { getRecentCommits } from "../services/fetchGithub.js";

export async function fetchCommitsController(req, res) {
	try {
		const result = await getRecentCommits();

		const repositories = result.data.viewer.repositories.nodes;

		let commits = [];
		repositories.forEach((repo) => {
			const commit = repo.defaultBranchRef.target.history.nodes;
			commits.push(commit);
		});

		return res.status(200).json(commits);
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
