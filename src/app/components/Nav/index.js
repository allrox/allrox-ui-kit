import { useState } from "react"
import React from "react";
import Image from "next/image"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../ui/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function Nav({ children, logo, alt, width, height, cta, ctalink, brandtext, bg }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClose = () => setMenuOpen(false);

    const clonedChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, {
            onClick: () => {
                handleMenuClose();
                if (child.props.onClick) {
                    child.props.onClick();
                }
            },
        })
    );

    return (
        <div className={`flex flex-col gap-4 w-full md:flex-row items-center md:justify-between ${bg}`}>

            <div className="flex items-center justify-between w-full md:w-auto">
                <Image src={logo} alt={alt} width={width} height={height} />
                <div className="px-8 mt-1 ext-base font-bold text-[#FFCD46]">
                    {brandtext}
                </div>

                <button className="block md:hidden p-2 text-2xl" aria-label="Menu mobile" onClick={() => setMenuOpen(!menuOpen)}>
                    <RxHamburgerMenu />
                </button>
            </div>

            <ul className={`${menuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row gap-4 md:gap-8 sm:items-start  md:items-center w-full md:w-auto grow justify-end text-base`}>
                {children}
                <li>
                    {cta && (
                        <div className="mt-2 md:mt-0 md:ms-10">
                            <Button cta={cta} buttonUrl={ctalink}>
                                <FaWhatsapp />
                            </Button>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}