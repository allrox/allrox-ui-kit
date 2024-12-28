import CartButton from "../CartButton"
import { MdOutlineDiscount } from "react-icons/md"

export default function PricingLine({ price, offerTag, buttonUrl, buttonIcon, oldprice, props }) {
  return (
    <div className={`flex flex-col gap-2 border-t border-1 border-white/[0.05] pt-4 h-full] ${props}`}>
      {
        oldprice &&
        <span className="line-through text-base font-bold text-red-400">
          from {oldprice}
        </span>
      }

      <div className="flex flex-wrap items-center gap-6">

        <div className="grow">
          <CartButton cta={`Buy for ${price}`} buttonUrl={buttonUrl} props="w-full">
            {buttonIcon}
          </CartButton>
        </div>

        {
          offerTag && (
          <div className="flex text-sm text-primary-700 font-medium gap-1 animate-bounce mx-auto items-center">
            <MdOutlineDiscount /> {offerTag}
          </div>
        )}

      </div>
    </div>
  )
}