import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {

    const user = false
    return (
        <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* Logo */}
            <div className="text-xl">
                <Link href="/">Massimo</Link>
            </div>
            {/* MobileMenu */}
            <div className="md:hidden">
                <Menu/>
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4">
                <div>
                    <Image src="/phone.png" alt=""/>
                </div>
                {!user ? (
                    <Link href="/">Login</Link>
                ) : (
                    <Link href="/orders">Order</Link>
                )}
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar
