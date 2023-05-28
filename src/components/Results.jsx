import Result from "./Result/Result"

export default function({repos}) {
    let results = repos;
    if (repos.items) {
        results = repos.items
        console.log(results)
    }
    const allResults = results.map((r, idx) => <Result result={r} key={idx} />)
    return (
        <div>
            <h1>{allResults}</h1>
        </div>
    )
}