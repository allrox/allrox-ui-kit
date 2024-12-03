export default function Hero({ children, params, id }) {
    return (
        <div id={id} className={`flex flex-col px-6 ${params}`}>
            <div className="max-w-screen-2xl mx-auto">
                {children}
            </div>
        </div>
    )
}