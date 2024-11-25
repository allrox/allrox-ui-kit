export default function Hero({ children, bg: params, id }) {
    return (
        <div id={id} className={`p-5 ${params}`}>
            <div className="max-w-screen-xl mx-auto py-4 xl:min-h-screen">
                {children}
            </div>
        </div>
    )
}