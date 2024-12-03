export default function Hero({ children, params, id }) {
    return (
        <div id={id} className={`px-6 ${params}`}>
            <div className="max-w-screen-xl mx-auto">
                {children}
            </div>
        </div>
    )
}