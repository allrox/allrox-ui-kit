export default function Section({ children, props, id }) {
    return (
        <div id={id} className={`p-5 ${props}`}>
            <div className="max-w-screen-xl mx-auto py-14">
                {children}
            </div>
        </div>
    )
}