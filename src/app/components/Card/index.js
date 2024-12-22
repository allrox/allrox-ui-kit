import Image from "next/image"
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import PricingLine from "../PricingLine";

export default function Card({ props, imgurl, alt, width, height, title, share, settings, bookmark, desc, oldprice, price, method, buttonUrl, tag }) {
    return (
        <div className={`flex flex-col bg-white text-black rounded-xl text-base font-regular  ${props}`}>

            {tag && (
                <div className="absolute text-xs font-medium mx-4 my-4 bg-primary-600 text-white px-[12] py-[3] rounded-2xl">{tag}</div>
            )
            }

            <Image
                src={imgurl}
                alt={alt}
                width={width}
                height={height}
                className="rounded-t-xl" />

            <div className="p-6 flex flex-col flex-1">
                {title && (
                    <span className="text-3xl font-bold text-primary-600">{title}</span>
                )}
                <div className="flex flex-col gap-1 flex-1">
                    <div className="flex flex-row gap-3 text-3xl mt-4 py-2 border-t border-b border-1 border-black/[0.2] text-lime-600">
                        {share && <a href={share}><CiShare2 /></a>}
                        {settings && <a href={share}><CiSettings /></a>}
                        {bookmark && <a href={share}><CiBookmarkPlus /></a>}
                    </div>
                    <div className="flex flex-col h-full justify-around flex-1">
                        <div className="py-3 flex-1 text-sm">
                            {desc}
                        </div>
                        <PricingLine oldprice={oldprice} price={price} method={method} buttonUrl={buttonUrl} />
                    </div>
                </div>
            </div>

        </div>
    )
}