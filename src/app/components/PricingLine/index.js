import Button from "../ui/Button"

export default function PricingLine({ price, method, buttonUrl, oldprice }) {
  return (
    <div className="flex flex-col gap-2 border-t border-1 border-white/[0.05] pt-4 h-full]">
      {
        oldprice &&
        <span className="line-through text-base">
          from {oldprice}
        </span>
      }

      <div className="flex flex-wrap items-center gap-4">
        <Button props="flex grow" cta={`Buy for ${price}`} buttonUrl={buttonUrl} />
        <div className="flex text-sm font-bold gap-1 grow animate-bounce">
          {method}
        </div>
      </div>
    </div>
  )
}