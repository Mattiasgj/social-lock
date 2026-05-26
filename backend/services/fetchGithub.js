import dotenv from "dotenv";
dotenv.config();

const query = `
query {
  viewer {
    login
    repositories(
      first: 2
      orderBy: { field: PUSHED_AT, direction: DESC }    
    ) {
      nodes {
        name
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 1, author: { id: "U_kgDOC80CAg" }) {
                nodes {    
                  message
                  committedDate
                  url
                  author {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export async function getRecentCommits() {
	const response = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
		body: JSON.stringify({ query }),
	});

	return response;
}
