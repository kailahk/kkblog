import { useState } from "react"
import Results from "./Results";
import { getRepos } from '../utilities/search-api'

export default function () {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([])

    function handleChange(evt) {
        const newSearchInput = evt.target.value;
        setSearchInput(newSearchInput);
    }
    
    async function handleClick() {
        try {
            const res = await getRepos(searchInput)
            setRepos(res);
            setSearchInput('')
        } catch (err) {
            alert(err)
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