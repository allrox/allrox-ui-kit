import Link from "next/link"

export default function Button({ cta, link, children }) {
    return (
        <Link href={link} passHref>
            <button className="flex flex-row gap-2 bg-white items-center hover:bg-secondary-400 hover:shadow-md text-primary-900 px-6 py-2 rounded-md" >
                {children} {cta}
            </button>
        </Link>
    )
}