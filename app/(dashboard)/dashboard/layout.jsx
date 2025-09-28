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
    X,
    User,
    Settings,
    HelpCircle,
    LogOut,
} from 'lucide-react';

const notifications = [
    {
        id: 1,
        user: 'Terry Franci',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        time: '5 min ago',
        avatar: '/image/notificationImage.png', // Replace with your actual image paths
        statusColor: 'bg-green-500', // Green status dot
    },
    {
        id: 2,
        user: 'Alena Franci',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        time: '8 min ago',
        avatar: '/image/notificationImage.png',
        statusColor: 'bg-green-500',
    },
    {
        id: 3,
        user: 'Jocelyn Kenter',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        time: '15 min ago',
        avatar: '/image/notificationImage.png',
        statusColor: 'bg-red-500',
    },
];

export default function Layout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const notificationRef = useRef(null);
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
            // Close profile menu
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            //Close notification menu
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setNotificationOpen(false);
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
                    className="flex items-center justify-start gap-2 mt-2 mb-6"
                >
                    <Image
                        src="/logo/logo.svg"
                        alt="Logo"
                        width={60}
                        height={40}
                        priority
                        className="w-20 sm:w-22 md:w-25" // responsive width
                    />
                </Link>

                <p className="mt-12 lg:mt-6 text-[#98A2B3] text-sm font-normal uppercase">
                    Menu
                </p>
                <nav className="mt-4">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href} className="mb-1">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 py-2 px-4 font-medium text-md rounded-lg transition duration-300 ease-in-out hover:bg-[#ECF3FF] hover:text-[#3758F9] ${
                                        pathname === item.href
                                            ? 'bg-[#ECF3FF] text-[#3758F9]'
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
                    className="fixed top-0 right-0 left-0 lg:left-[250px] bg-white  text-gray-800  py-4 px-5 border-b border-[#E4E7EC] flex items-center justify-between z-45"
                >
                    {/* Left - Hamburger + Search */}
                    <div className="flex items-center gap-4">
                        {/* Hamburger button */}
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="cursor-pointer p-2 rounded-lg border border-[#E4E7EC] h-9 w-9 flex items-center justify-center"
                        >
                            {sidebarOpen ? (
                                <X className="w-5 h-5 text-[#667085]" />
                            ) : (
                                <Menu className="w-5 h-5 text-[#667085]" />
                            )}
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
                    <Link href="/dashboard" className=" block lg:hidden">
                        <Image
                            src="/logo/logo.svg"
                            alt="Logo"
                            width={60}
                            height={40}
                            priority
                            className="w-30" // responsive width
                        />
                    </Link>

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
                        <div
                            className="relative"
                            ref={notificationRef} // New Ref for Notification
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setNotificationOpen((prev) => !prev)
                                }
                                className="hidden cursor-pointer p-2 rounded-full relative border border-[#E4E7EC] h-9 w-9 lg:flex items-center justify-center"
                            >
                                <Bell className="w-5 h-5 text-[#667085]" />
                                {/* Dot indicator */}
                                <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
                            </button>

                            {/*  Notification Dropdown Panel  */}
                            {notificationOpen && (
                                <div className="absolute right-0 top-12 w-80 h-[470px] overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                                    {/* Header */}
                                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            Notifications
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setNotificationOpen(false)
                                            }
                                            className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Notification List */}
                                    <div className="divide-y divide-gray-100">
                                        {notifications.map((notif) => (
                                            <div
                                                key={notif.id}
                                                className="flex gap-3 p-4 hover:bg-gray-50 cursor-pointer"
                                            >
                                                {/* Avatar with Status Dot */}
                                                <div className="relative flex-shrink-0">
                                                    <Image
                                                        src={notif.avatar}
                                                        alt={notif.user}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full h-10 w-10 object-cover object-top"
                                                    />
                                                    {/* Status Dot */}
                                                    <span
                                                        className={`absolute right-0 top-8 w-2.5 h-2.5 rounded-full ring-2 ring-white ${notif.statusColor}`}
                                                    />
                                                </div>

                                                {/* Notification Content */}
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-800 leading-snug">
                                                        <span className="font-semibold">
                                                            {notif.user}
                                                        </span>{' '}
                                                        {notif.action}
                                                        <br />
                                                        <span className="font-semibold text-gray-700">
                                                            {notif.project}
                                                        </span>
                                                    </p>
                                                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                                        <span>
                                                            {notif.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer Button */}
                                    <div className="p-3  text-center">
                                        <Link
                                            href="#"
                                            className="text-sm w-full inline-block font-medium border border-gray-200 text-gray-500 p-3 rounded-lg"
                                        >
                                            View All Notification
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

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
                            <div className="absolute right-0 top-13 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-3 z-50">
                                {/* User Info */}
                                <div className="px-4 pb-3 border-b border-gray-200">
                                    <p className="text-sm font-medium text-gray-900">
                                        Emirhan Boruch
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        emirhanboruch51@gmail.com
                                    </p>
                                </div>

                                {/* Menu Items */}
                                <div className="py-2">
                                    <Link
                                        href="/dashboard/profile"
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md text-[#344054] font-medium text-sm"
                                    >
                                        <User className="w-5 h-5 text-[#344054]" />
                                        Edit profile
                                    </Link>

                                    <Link
                                        href="/dashboard/settings"
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md text-[#344054] font-medium text-sm"
                                    >
                                        <Settings className="w-5 h-5 text-[#344054]" />
                                        Account settings
                                    </Link>

                                    <Link
                                        href="/support"
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md text-[#344054] font-medium text-sm"
                                    >
                                        <HelpCircle className="w-5 h-5 text-[#344054]" />
                                        Support
                                    </Link>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mt-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-50 rounded-md text-red-600 text-sm"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        Sign out
                                    </button>
                                </div>
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
