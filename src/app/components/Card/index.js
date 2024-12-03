import Image from "next/image"
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";

export default function Card({ children, props, imgurl, alt, width, height, title, share, settings, bookmark }) {
    return (
        <div className={`flex flex-col bg-primary-900/[.45] p-4 rounded-lg text-base font-regular ${props}`}>
            <Image
                src={imgurl}
                alt={alt}
                width={width}
                height={height}
                className="rounded-md" />
            <div className="pt-6">
                {title && (
                    <span className="text-3xl font-bold">{title}</span>
                )}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2 text-2xl mt-4 py-2 border-t border-b border-1 border-white/[0.05]">
                        {share &&
                            <a href={share}>
                                <CiShare2 />
                            </a>
                        }
                        {settings &&
                            <a href={share}>
                                <CiSettings />
                            </a>
                        }
                        {bookmark &&
                            <a href={share}>
                                <CiBookmarkPlus />
                            </a>
                        }

                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}