"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Oooh_Baby } from "next/font/google"

const NavbarRoutes = [
    {
        id: 1,
        title: "Guided coaching",
        href: "/guided-coaching"
    },
    {
        id: 2,
        title: "About",
        href: "/about"
    },
    {
        id: 3,
        title: "Contact",
        href: "/contact"
    },
    {
        id: 4,
        title: "Legal",
        href: "/legal"
    }
]

const NavbarFont = Oooh_Baby({
    subsets: ["latin"],
    weight: "400"
})

const Navbar = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="relative">
            <div className="flex justify-between items-center w-full p-6 select-none">
                <Link prefetch href="/" className={`${NavbarFont.className} text-3xl md:text-6xl font-bold`}></Link>

                <div className="hidden lg:flex gap-18 items-center">
                    {
                        NavbarRoutes.map((route) => (
                            <Link
                                prefetch
                                key={route.id}
                                href={route.href}
                                className={`
                                    font-semibold 
                                    px-4 
                                    py-2 
                                    rounded-lg
                                    ${pathname === route.href ? 'bg-secondary' : 'hover:bg-muted'}
                                `}
                            >
                                {route.title}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    lg:hidden 
                    absolute 
                    top-full 
                    left-0 
                    right-0 
                    backdrop-blur-sm 
                    rounded-b-lg 
                    transform
                    transition-all
                    duration-300
                    ease-in-out
                    ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                `}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {NavbarRoutes.map((route) => (
                        <Link
                            prefetch
                            key={route.id}
                            href={route.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                                font-semibold 
                                px-4 
                                py-2 
                                rounded-lg
                                ${pathname === route.href ? 'bg-secondary' : 'hover:bg-muted'}
                            `}
                        >
                            {route.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar