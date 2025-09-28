'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutGrid,
    Box,
    Menu,
    Search,
    Bell,
    ChevronDown,
    Moon,
    Sun,
    Ellipsis,
} from 'lucide-react';

export default function Layout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem('blog-token');
        localStorage.removeItem('user');
        // queryClient.removeQueries({ queryKey: ['currentUser'] });
        router.replace('/login');
    };

    const menuItems = [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: <LayoutGrid size={20} />,
        },
        {
            label: 'Products',
            href: '/dashboard/products',
            icon: <Box size={20} />,
        },
    ];

    // Close profile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                // className="fixed left-0 top-0 h-full w-64 lg:w-[250px] p-4 bg-white border-r border-[#E4E7EC] z-40"
                className={`fixed left-0 top-0 h-full w-64 lg:w-[250px] p-4 bg-white  border-r border-[#E4E7EC] z-40 transform transition-transform duration-300 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}
            >
                <Link
                    href="/dashboard"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    {/* Replace with a proper logo or text */}
                    <span className="text-2xl font-bold text-blue-900">AB</span>
                </Link>

                <p className="mt-6 text-[#98A2B3] text-sm font-normal uppercase">
                    Menu
                </p>
                <nav className="mt-4">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href} className="mb-1">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 py-2 px-4 font-medium text-md rounded-lg transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-900 ${
                                        pathname === item.href
                                            ? 'bg-[#ECF3FF] text-[#3758F9] '
                                            : 'text-[#344054]'
                                    }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main content */}
            <div className="flex-1 lg:ml-[250px] flex flex-col">
                {/* Header */}
                <header
                    // className="fixed top-0 right-0 left-0 lg:left-[250px] bg-white text-gray-800 py-3 px-5 border-b border-[#E4E7EC] flex items-center justify-between z-30"
                    className="fixed top-0 right-0 left-0 lg:left-[250px] bg-white  text-gray-800  py-3 px-5 border-b border-[#E4E7EC] flex items-center justify-between z-30"
                >
                    {/* Left - Hamburger + Search */}
                    <div className="flex items-center gap-4 flex-1">
                        {/* Hamburger button */}
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="cursor-pointer p-2 rounded-lg border border-[#E4E7EC] h-9 w-9 flex items-center justify-center"
                        >
                            <Menu className="w-5 h-5 text-[#667085]" />
                        </button>

                        {/* Search bar */}
                        <div className="relative flex-1 max-w-md hidden lg:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search or type command..."
                                className="w-full border border-gray-200 rounded-lg pl-10 pr-16 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border px-2 py-0.5 rounded">
                                ⌘K
                            </span>
                        </div>
                    </div>

                    {/* Right - Icons + Profile */}
                    <div
                        className="flex items-center gap-4 relative"
                        ref={menuRef}
                    >
                        <button
                            type="button"
                            className="flex lg:hidden cursor-pointer w-5 h-5 text-[#667085]"
                        >
                            <Ellipsis />
                        </button>
                        {/* Clock icon */}
                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            className=" hidden cursor-pointer p-2 rounded-full 0 border border-[#E4E7EC] h-9 w-9 lg:flex items-center justify-center"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-[#667085]" />
                            ) : (
                                <Moon className="w-5 h-5 text-[#667085]" />
                            )}
                        </button>

                        {/* Notification icon */}
                        <button
                            type="button"
                            className="hidden cursor-pointer p-2 rounded-full  relative  border border-[#E4E7EC] h-9 w-9 lg:flex items-center justify-center"
                        >
                            <Bell className="w-5 h-5 text-[#667085]" />
                            {/* Dot indicator */}
                            <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
                        </button>

                        {/* Profile dropdown */}
                        <div
                            className="hidden lg:flex items-center gap-2 cursor-pointer select-none"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <Image
                                src="/image/userImage.png"
                                alt="profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                            <p className="font-medium text-[#344054] text-sm">
                                Musharof
                            </p>
                            <ChevronDown
                                className={`w-4 h-4 text-[#667085] transition-transform ${
                                    menuOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </div>

                        {menuOpen && (
                            <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                <Link
                                    href="/dashboard/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href="/dashboard/settings"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Settings
                                </Link>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto mt-[63px] p-4 md:p-6 lg:p-8 bg-[#f9fafb]">
                    {children}
                </main>
            </div>
        </div>
    );
}
