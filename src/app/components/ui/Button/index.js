import Link from "next/link"

export default function Button({ cta, buttonUrl, children, arialabel, props }) {
    return (
        <a href={buttonUrl} aria-label={arialabel}>
            <button className={`flex flex-row gap-2 hover:bg-white justify-center items-center border bg-none hover:text-primary-900 font-medium px-6 py-2 rounded-md ${props}`}  >
                {children} {cta}
            </button>
        </a>
    )
}