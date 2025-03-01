"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Rubik_Vinyl } from "next/font/google"
import Image from "next/image"

const NavbarRoutes = [
    { id: 1, title: "How we work", href: "/how-we-work" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Contact", href: "/contact" },
    { id: 4, title: "Legal", href: "/legal" }
]

const NavbarFont = Rubik_Vinyl({
    subsets: ["latin"],
    weight: "400"
})

const Navbar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Common link styling
    const linkStyle = `font-semibold px-4 py-2 rounded-lg`

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background text-primary">
            {/* Main navbar container */}
            <div className="flex justify-between items-center w-full px-6 py-4">
                {/* Logo */}
                <Link href="/" prefetch className={`${NavbarFont.className} text-3xl md:text-6xl font-bold`}>
                    <Image className="hidden lg:flex" src="/bvb-navbar.svg" alt="Navbar Logo" width={300} height={100} />
                    <Image className="lg:hidden" src="/bvb-navbar-mobile.svg" alt="Navbar Logo" width={100} height={100} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-18 items-center">
                    {NavbarRoutes.map(route => (
                        <Link
                            key={route.id}
                            href={route.href}
                            prefetch
                            className={`${linkStyle} ${pathname === route.href ? 'bg-secondary' : 'hover:bg-muted'}`}
                        >
                            {route.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-background/80 backdrop-blur-sm rounded-b-lg">
                    <div className="flex flex-col p-6 space-y-4">
                        {NavbarRoutes.map(route => (
                            <Link
                                key={route.id}
                                href={route.href}
                                prefetch
                                onClick={() => setIsMenuOpen(false)}
                                className={`${linkStyle} ${pathname === route.href ? 'bg-secondary' : 'hover:bg-muted'}`}
                            >
                                {route.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar