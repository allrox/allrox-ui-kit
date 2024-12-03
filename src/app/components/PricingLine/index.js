import Button from "../ui/Button"

export default function PricingLine({ price, method, buttonUrl }) {
  return (
    <div className="flex flex-row gap-2 border-t border-1 border-white/[0.05] justify-between items-center pt-4 h-full]">
      <Button cta="Comprar" props="w-full bg-secondary-400 border-none text-primary-950 text-sm p-2" buttonUrl={buttonUrl}/>
      <div className="font-medium">
        <span className="text-base">{price}</span> {method}
      </div>
    </div>
  )
}