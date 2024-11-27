import Image from "next/image"

export default function Card({ children, imgurl, alt, width, height, title }) {
    return (
        <div className="flex flex-col bg-primary-900/[.45] p-4 rounded-lg">
            <Image
                src={imgurl}
                alt={alt}
                width={width}
                height={height}
                className="rounded-md" />
            <div className="pt-4">
                {title && (
                    <span className="text-2xl font-bold text-secondary-400">{title}</span>
                )}
                <div className="flex flex-col gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}