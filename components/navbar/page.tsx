"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using Lucide icons for a cleaner look

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/login", label: "Login" },
        { href: "/register", label: "Register" },
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold">
                    D.A.D. Email Builder
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-x-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-white text-lg px-3 py-2 rounded-lg transition-all duration-200 hover:text-gray-400 ${
                                    pathname === link.href ? "font-bold text-white" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-gray-800 transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <ul className="flex flex-col items-center gap-4 py-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-white text-lg block px-4 py-2 transition-all duration-200 hover:text-gray-400 ${
                                    pathname === link.href ? "font-bold text-white" : ""
                                }`}
                                onClick={() => setIsOpen(false)} // Close menu after clicking
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
