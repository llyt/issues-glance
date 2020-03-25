export default {
  getRepos: (userName, perPage = 100) => fetch(`https://api.github.com/search/repositories?sort=stars&per_page=${perPage}&q=user:${userName}`),
  getIssues: (userName, repoName, perPage, page) => fetch(`https://api.github.com/search/issues?page=${page}&per_page=${perPage}&q=repo:${userName}/${repoName}`)
}