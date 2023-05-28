export async function getRepos(searchInput) {
    const options = {
        headers: {
            accept: "application/vnd.github+json",
        },
    }
    const queryString = `q=${searchInput}+in:name,description`;
    const results = fetch(`https://api.github.com/search/repositories?${queryString}`, options
    ).then(res => res.json());
    return results
}