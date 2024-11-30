export default function PropertyTag({ tag, text }) {
    return (
        <div className="flex flex-row mt-3 font-regular text-sm">
            <div>
                <span className="property me-3">{tag}:</span>
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}