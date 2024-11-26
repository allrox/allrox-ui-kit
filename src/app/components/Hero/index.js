export default function Hero({ children, bg: params, id }) {
    return (
        <div id={id} className={`px-5 ${params}`}>
            <div className="max-w-screen-xl mx-auto">
                {children}
            </div>
        </div>
    )
}