import Image from "next/image"

export default function Card({ children, imgurl, alt, width, height, title }) {
    return (
        <div className="flex flex-col gap-2 p-3 pb-4 border border-1 border-white/[.2] bg-white/[.05] rounded-lg">
            <Image src={imgurl} alt={alt} width={width} height={height} className="rounded-md"/>
            {title && (
                <span className="text-xl font-bold mt-4">{title}</span>
            )}
            <div className="flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}