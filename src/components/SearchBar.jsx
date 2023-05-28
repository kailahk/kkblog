import { useState } from "react"
import Results from "./Results";

export default function () {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([])

    function handleChange(evt) {
        const newSearchInput = evt.target.value;
        setSearchInput(newSearchInput);
    }

    const options = {
        method: "GET",
        headers: {
            accept: "application/vnd.github+json",
        },
    }
    async function handleClick() {
        const queryString = `q=${searchInput}+in:name,description`;
        try {
            const res = await fetch(`https://api.github.com/search/repositories?${queryString}`, options
            ).then(res => res.json());
            setRepos(res);
            setSearchInput('')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <input type="text" placeholder="Search" value={searchInput} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            <Results repos={repos} />
        </div>
    )
}