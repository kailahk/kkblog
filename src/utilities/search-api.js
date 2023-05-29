export async function getRepos(searchInput) {
    const options = {
        headers: {
            accept: "application/vnd.github.text-match+json",
            "Content-Type": "application/json",
        },
    }
    const results = fetch(`https://api.github.com/search/repositories?q=${searchInput}+in:name,description`, options
    ).then(res => res.json());
    return results
}