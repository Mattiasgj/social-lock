import { getRecentCommits } from "../services/fetchGithub.js";

export async function fetchCommitsController(req, res) {
	try {
		const result = await getRecentCommits();

		const repositories = result.data.viewer.repositories.nodes;

		const commitsRepo = repositories.map((repo) => {
			return repo.defaultBranchRef.target.history.nodes;
		});

		const commits = commitsRepo.flat();

		return res.status(200).json(commits);
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
