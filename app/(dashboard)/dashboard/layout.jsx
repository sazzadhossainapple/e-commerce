'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Layout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem('blog-token');
        localStorage.removeItem('user');
        // queryClient.removeQueries({ queryKey: ['currentUser'] });
        router.replace('/login');
    };

    const menuItems = [
        { label: 'Dashboard', href: '/dashboard', icon: '' },
        { label: 'Products', href: '/dashboard/products', icon: '' },
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

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 lg:w-[250px] p-4 bg-white border-r border-[#E4E7EC] z-40">
                <Link
                    href="/dashboard"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <div className="bg-white text-primary px-3 py-1 rounded-md font-bold text-blue-900">
                        APP
                    </div>
                </Link>
                <nav className="mt-4">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 ${
                                        pathname === item.href
                                            ? 'bg-gray-100 text-gray-900'
                                            : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 lg:ml-[250px] flex flex-col">
                {/* Header */}
                <header className="fixed top-0 right-0 left-0 lg:left-[250px] bg-white text-gray-800 py-4 px-5 shadow flex items-center justify-between z-30">
                    <div>{/* Add hamburger for mobile here later */}</div>
                    <div className="relative" ref={menuRef}>
                        <div
                            className="flex items-center gap-2.5 cursor-pointer select-none"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <Image
                                src="/profile.webp"
                                alt="profile"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <p className="font-medium">name</p>
                        </div>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
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
                <main className="flex-1 overflow-y-auto mt-[72px] p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
