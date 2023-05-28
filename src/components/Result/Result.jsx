export default function Result({result}) {
    return(
        <div className="Result">
            {result.full_name}: <br/>
            {result.description}
            <br /><br />
        </div>
    )
}