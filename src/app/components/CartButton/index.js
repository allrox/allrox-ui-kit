import { MdOutlineShoppingCart } from "react-icons/md"

export default function CartButton({ cta, buttonUrl, arialabel, props }) {
    return (
        <a href={buttonUrl} aria-label={arialabel}>
            <button className={`flex gap-2 bg-secondary-400 text-md text-black font-bold px-6 py-4 rounded-lg items-center justify-center ${props}`}  >
                <MdOutlineShoppingCart /> {cta}
            </button>
        </a>
    )
}