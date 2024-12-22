export default function Button({ cta, buttonUrl, children, arialabel, props }) {
    return (
        <a href={buttonUrl} aria-label={arialabel}>
            <button className={`flex flex-row gap-2 justify-center items-center bg-secondary-400 text-lg text-black font-medium px-6 py-4 rounded-lg ${props}`}  >
                {children} {cta}
            </button>
        </a>
    )
}