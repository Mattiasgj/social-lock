import { getRecentCommits } from "../services/fetchGithub.js";

export async function fetchCommitsController(req, res) {
	try {
		const result = await getRecentCommits();

		const repositories = result.data.viewer.repositories.nodes;

		const commits = repositories.map((repo) => {
			return repo.defaultBranchRef.target.history.nodes;
		});

		return res.status(200).json(commits);
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
