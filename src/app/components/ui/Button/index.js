import Link from "next/link"

export default function Button({ cta, link, children, props }) {
    return (
        <Link href={link} passHref>
            <button className={`flex flex-row gap-2 bg-white justify-center items-center hover:bg-primary-900 hover:text-white text-primary-900 px-6 py-2 rounded-md ${props}`} >
                {children} {cta}
            </button>
        </Link>
    )
}