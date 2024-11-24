import Image from "next/image"

export default function Nav({ children, logo, alt, width, height, cta }) {
    return (
        <div className="flex flex-col gap-10  md:flex-row items-center md:justify-between">
            <Image src={logo} alt={alt} width={width} height={height} />
            <ul className="flex flex-col md:flex-row gap-8 items-center">
                {children}
            </ul>
            {cta && <div>
                <button>{cta}</button>
            </div>}
        </div>

    )
}