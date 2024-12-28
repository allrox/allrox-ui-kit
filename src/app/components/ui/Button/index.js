export default function Button({ cta, buttonUrl, children: buttonIcon, arialabel, props }) {
    return (
        <a href={buttonUrl} aria-label={arialabel}>
            <button className={`flex gap-2 grow bg-secondary-400 text-md text-black font-bold px-8 py-4 rounded-lg items-center ${props}`}  >
                {buttonIcon &&
                    (
                        <div>
                            {buttonIcon}
                        </div>
                    )}
                {cta}
            </button>
        </a>
    )
}