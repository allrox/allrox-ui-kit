import Button from "../ui/Button"

export default function PricingLine(){
    return(
        <div className="flex flex-row gap-4 border-t border-1 border-white/[0.05] justify-between items-center pt-4">
              <Button cta="Comprar" link="#" props="w-full bg-secondary-400 border-none text-primary-950 text-sm p-4" />
              <div className="font-medium">
                R$ <span className="text-lg">99</span>,90 no PIX
              </div>
            </div>
    )
}