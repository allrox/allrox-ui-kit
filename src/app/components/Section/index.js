export default function Section({ children, bg }) {
    return (
        <div className={`p-5 ${bg}`}>
            <div className="max-w-screen-xl mx-auto py-12">
                {children}
            </div>
        </div>
    )
}