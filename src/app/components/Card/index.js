import Image from "next/image"
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import PricingLine from "../PricingLine";

export default function Card({  props, imgurl, alt, width, height, title, share, settings, bookmark, desc, oldprice, price, method , buttonUrl}) {
    return (
        <div className={`flex flex-col bg-primary-900/[.45] rounded-xl text-base font-regular  ${props}`}>
        
            <Image
                src={imgurl}
                alt={alt}
                width={width}
                height={height}
                className="rounded-t-xl" />

            <div className="p-5 ">
                {title && (
                    <span className="text-3xl font-bold">{title}</span>
                )}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2 text-2xl mt-4 py-2 border-t border-b border-1 border-white/[0.05]">
                        {share && <a href={share}><CiShare2 /></a>}
                        {settings && <a href={share}><CiSettings /></a>}
                        {bookmark && <a href={share}><CiBookmarkPlus /></a>}
                    </div>
                    <div className="flex flex-col h-full justify-around">
                        <div className="py-4">
                            {desc}
                        </div>
                        <PricingLine oldprice={oldprice} price={price} method={method} buttonUrl={buttonUrl}/>
                    </div>
                </div>
            </div>

        </div>
    )
}