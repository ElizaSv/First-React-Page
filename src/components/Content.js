export default function Content(props) {
    return (
        <div className='quote-container'>
            <h3>{props.quote}</h3>
            <p> <em>by {props.author}</em></p>
        </div>
    )
}
