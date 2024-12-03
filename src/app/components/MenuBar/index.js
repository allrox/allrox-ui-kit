export default function MenuBar({ children, params }) {
    return (
        <div className={`${params}`}>
            <div className="max-w-screen-xl mx-auto py-8">
                {children}
            </div>
        </div>
    )
}