import Button from "../ui/Button"

export default function PricingLine({ price, method, buttonUrl, oldprice }) {
  return (
    <div className="flex flex-col gap-2 border-t border-1 border-white/[0.05] pt-6 h-full]">
      {
        oldprice &&
        <span className="line-through text-base">
          from {oldprice}
        </span>
      }

      <div className="flex flex-row justify-between">
        <Button cta={`Buy for ${price}`} buttonUrl={buttonUrl} />
        <div className="text-base flex flex-row text-sm font-bold items-center gap-1">
          {method}
        </div>
      </div>
    </div>
  )
}