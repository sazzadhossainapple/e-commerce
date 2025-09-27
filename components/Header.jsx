'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    {
        name: 'Deals of the Week',
        href: '/',
        badge: { text: 'Hot', color: 'bg-[#EF444426] text-[#EF4444]' },
    },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
    {
        name: 'Sale',
        href: '/sale',
        badge: { text: '20% OFF', color: 'bg-[#EFF6FF] text-[#1D4ED8]' },
    },
];

const Header = () => {
    const [lang, setLang] = useState('English');
    const [currency, setCurrency] = useState('USD');
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="w-full md:border-b border-b-[#E5E7EB]">
            {/* Top Bar */}
            <div className="bg-[#111827]">
                <div className="container mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:justify-between text-white font-normal text-sm py-5 md:py-3 px-6 md:px-10 gap-4">
                    {/* Language & Currency */}
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1">
                            <Image
                                src="/icon/lang.svg"
                                alt="flag"
                                width={14}
                                height={14}
                                className="w-4 h-4 object-cover"
                                priority
                            />
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                                className="outline-none bg-[#111827]"
                            >
                                <option>English</option>
                                <option>Bangla</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <Image
                                src="/icon/US.svg"
                                alt="usd"
                                width={14}
                                height={14}
                                className="w-4 h-4 object-cover"
                                priority
                            />
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="bg-[#111827] outline-none"
                            >
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    <span className="text-xs">
                        Flash Sale Live – 30% Off Everything
                    </span>

                    <Link
                        href="/login"
                        className="hover:underline text-xs hidden lg:flex items-center gap-1 cursor-pointer "
                    >
                        <Image
                            src="/icon/User.svg"
                            alt="user"
                            width={14}
                            height={14}
                            className="w-4 h-4 object-cover"
                            priority
                        />
                        Login / Register
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="container mx-auto flex justify-between items-center px-6 md:px-10 py-5">
                {/* Logo */}
                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        className="block lg:hidden cursor-pointer"
                    >
                        <Image
                            src="/icon/menu.svg"
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-cover "
                            priority
                        />
                    </button>
                    <Image
                        src="/logo/logo.svg"
                        alt="logo"
                        width={110}
                        height={20}
                        className=""
                        priority
                    />
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex gap-6 text-sm font-medium text-[#1F2937]">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`hover:text-[#1D4ED8] cursor-pointer ${
                                        isActive ? 'text-[#1D4ED8]' : ''
                                    } flex items-center gap-1`}
                                >
                                    {item.name}
                                    {item.badge && (
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-4xl ${item.badge.color}`}
                                        >
                                            {item.badge.text}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* Mobile sliding menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="px-6 flex justify-between items-center py-4 border-b border-b-[#E5E7EB]">
                        <Image
                            src="/logo/logo.svg"
                            alt="logo"
                            width={80}
                            height={20}
                            className=""
                            priority
                        />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="cursor-pointer bg-[#111827] flex items-center justify-center text-white h-6 w-6 p-2 rounded-full"
                        >
                            x
                        </button>
                    </div>

                    <ul className=" px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#1F2937]">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`hover:text-[#1D4ED8] cursor-pointer ${
                                            isActive ? 'text-[#1D4ED8]' : ''
                                        } flex items-center gap-1`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                        {item.badge && (
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-4xl ${item.badge.color}`}
                                            >
                                                {item.badge.text}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}

                {/* Icons */}
                <div className="flex gap-5 items-center text-gray-600">
                    <button type="button" className="bg-transparent border-0">
                        <Image
                            src="/icon/search.svg"
                            alt="search"
                            width={16}
                            height={16}
                            className="w-5 h-5"
                            priority
                        />
                    </button>
                    <button type="button" className="bg-transparent border-0">
                        <Image
                            src="/icon/UserIcon.svg"
                            alt="user"
                            width={16}
                            height={16}
                            className="w-5 h-5"
                            priority
                        />
                    </button>
                    <button
                        type="button"
                        className=" hidden md:block relative cursor-pointer bg-transparent border-0"
                    >
                        <Image
                            src="/icon/heart.svg"
                            alt="wishlist"
                            width={16}
                            height={16}
                            className="w-5 h-5"
                            priority
                        />
                        <span className="absolute -top-2 -right-2 bg-[#1D4ED8] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </button>
                    <button
                        type="button"
                        className="relative cursor-pointer bg-transparent border-0"
                    >
                        <Image
                            src="/icon/cart.svg"
                            alt="cart"
                            width={16}
                            height={16}
                            className="w-5 h-5"
                            priority
                        />
                        <span className="absolute -top-2 -right-2 bg-[#1D4ED8] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
