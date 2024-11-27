import Image from "next/image"

export default function TextImage({ children, image, width, height, alt, order, params }) {

    return (
        <div className={`grid grid-cols1 lg:grid-cols-2 justify-center gap-10 py-8 ${params}`}>
            <div className="flex flex-col">{children}</div>
            <div className={`flex flex-col shrink-0 ${order}`}>
                <Image src={image} width={width} height={height} alt={alt} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 2560px) 50vw, 33vw"/>
            </div>
        </div>
    )
}
