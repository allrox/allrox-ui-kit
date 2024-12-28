import Image from "next/image"

export default function TextImage({ children, image, width, height, alt, order, props, desc, maxwidth }) {

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 py-8 ${props}`}>
            <div className="flex flex-col">{children}</div>
            <div className={`flex flex-col items-center ${order}`}>
                <Image src={image} width={width} height={height} alt={alt} loading="lazy" className={`rounded-lg flex w-full ${maxwidth}`}  />
                {desc && (
                    <p className="py-0 my-3">{desc}</p>
                )
                }
            </div>
        </div>
    )
}
