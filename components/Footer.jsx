import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="">
            {/* Top Section */}
            <div className="bg-[#F3F4F6]">
                <div className="container mx-auto px-6 md:px-10 py-10 lg:py-15 grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Image
                            src="/logo/logo.svg"
                            alt="logo"
                            width={110}
                            height={20}
                            className=""
                            priority
                        />
                        <p className="mt-6 text-sm font-normal text-[#6B7280] leading-6">
                            TailGrids comes with all the essential UI components
                            you need to create beautiful websites based on
                            Tailwind CSS.
                        </p>
                        <div className="mt:6 lg:mt-12">
                            <h3 className="text-sm text-[#6B7280] font-normal">
                                Follow us on
                            </h3>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="hover:text-blue-600">
                                    <Image
                                        src="/icon/facebook.svg"
                                        alt="fb"
                                        height={18}
                                        width={18}
                                        priority
                                    />
                                </a>
                                <a href="#" className="hover:text-blue-600">
                                    <Image
                                        src="/icon/instagram.svg"
                                        alt="insta"
                                        height={18}
                                        width={18}
                                        priority
                                    />
                                </a>
                                <a href="#" className="hover:text-blue-600">
                                    <Image
                                        src="/icon/twitter.svg"
                                        alt="twitter"
                                        height={18}
                                        width={18}
                                        priority
                                    />
                                </a>
                                <a href="#" className="hover:text-blue-600">
                                    <Image
                                        src="/icon/linkedin.svg"
                                        alt="linkedin"
                                        height={18}
                                        width={18}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Clothing */}
                    <div>
                        <h3 className="font-semibold mb-6 text-[#1F2937] font-xl">
                            Clothing
                        </h3>
                        <ul className="space-y-3 text-sm font-medium text-[#6B7280]">
                            {[
                                'Tops',
                                'Tops & Blouses',
                                'Dresses',
                                'Outerwear',
                                'Accessories',
                                'New Arrivals',
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-blue-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shoes */}
                    <div>
                        <h3 className="font-semibold mb-6 text-[#1F2937] font-xl">
                            Shoes
                        </h3>
                        <ul className="space-y-3 text-sm font-medium text-[#6B7280]">
                            {[
                                'Hills shoed',
                                'Running Shoes',
                                'Sandals',
                                'Ballet Pumps',
                                'Slingback',
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-blue-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Sale{' '}
                                    <span className="text-[#B91C1C] text-xs font-medium bg-[#FEF2F2] py-1 px-2 rounded-4xl">
                                        Hot Item
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold mb-6 text-[#1F2937] font-xl">
                            Newsletter
                        </h3>
                        <p className="text-sm font-medium text-[#6B7280] leading-6">
                            Signup for latest news and insights from TailGrids
                        </p>
                        <form className="flex flex-col space-y-3 mt-6">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="border border-[#D1D5DB] bg-white rounded-xl p-2 text-sm focus:outline-none focus:border-blue-500 placeholder:text-[#9CA3AF]"
                            />
                            <button
                                type="submit"
                                className="bg-[#3758F9] font-medium text-white text-sm py-2 rounded-xl hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Middle Section */}

            <div className="px-6 md:px-10 py-8 grid gap-6 md:grid-cols-3 text-sm">
                <div className="flex items-center space-x-3">
                    <span className="font-semibold">📞</span>
                    <div>
                        <p>8:30 AM – 10:30 PM</p>
                        <p className="font-medium">+3628398030</p>
                    </div>
                </div>
                <div>
                    <p className="font-medium mb-2">Download Now on</p>
                    <div className="flex space-x-3">
                        <img
                            src="/appstore.png"
                            alt="App Store"
                            className="h-8"
                        />
                        <img
                            src="/googleplay.png"
                            alt="Google Play"
                            className="h-8"
                        />
                    </div>
                </div>
                <div>
                    <p className="font-medium mb-2">We Support</p>
                    <div className="flex space-x-3">
                        <img src="/visa.png" alt="Visa" className="h-6" />
                        <img src="/paypal.png" alt="Paypal" className="h-6" />
                        <img
                            src="/mastercard.png"
                            alt="Mastercard"
                            className="h-6"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-[#F3F4F6]">
                <div className="container mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-500 space-y-2 md:space-y-0">
                    <p>© Copyright 2025 – TailGrids.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-600">
                            Refund Policy
                        </a>
                        <a href="#" className="hover:text-blue-600">
                            Terms of Services
                        </a>
                        <a href="#" className="hover:text-blue-600">
                            Shipping policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
