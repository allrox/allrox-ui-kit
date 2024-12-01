export default function Pricing({ oldprice, price, method }) {
    return (
        <div className="flex flex-col items-start mb-4 h-full">
                <div className="text-sm min-h-6">
                    {oldprice}
                </div>
            <div className="flex flex-row font-bold items-end text-2xl grow">
                R$<span className="text-4xl mb-[-2px] mx-1">{price}</span>
                {method &&
                    <span className="text-sm"> {method}</span>
                }
            </div>
        </div>
    )
}