export default function Section({ children, bg, id }) {
    return (
        <div id={id} className={`p-5 ${bg}`}>
            <div className="max-w-screen-xl mx-auto py-14">
                {children}
            </div>
        </div>
    )
}