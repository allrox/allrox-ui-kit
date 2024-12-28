import Image from "next/image"
import PricingLine from "../PricingLine";
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";

export default function Card({ props, imgurl, alt, title, share, settings, bookmark, desc, oldprice, price, offerTag, buttonUrl, tag }) {
    return (
        <div className={`flex flex-col bg-white text-black rounded-xl text-base font-regular lg:hover:scale-[1.02] hover:shadow-[0_0_40px_5px_rgba(0,0,0,.1)] transition-transform ${props} `}>

            {tag && (
                <div className="absolute text-xs font-medium mx-4 my-4 bg-primary-600 text-white px-3 py-1 rounded-2xl">{tag}</div>
            )
            }

            <Image
                src={imgurl}
                alt={alt}
                width={650}
                height={650}
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
                    <div className="flex flex-col flex-1">
                        <div className="py-3 flex-1 text-sm">
                            {desc}
                        </div>
                        <PricingLine oldprice={oldprice} price={price} offerTag={offerTag} buttonUrl={buttonUrl} />
                    </div>
                </div>
            </div>

        </div>
    )
}