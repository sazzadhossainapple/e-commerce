import Image from 'next/image';
import Link from 'next/link';

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

            <div className="container mx-auto px-6 md:px-10 py-8 grid gap-8 lg:gap-16  lg:grid-cols-[20%_40%_40%] text-sm text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 border-b md:border-0 border-[#F3F4F6] pb-6 md:pb-0">
                    <div className="bg-[#F3F4F6] p-1 rounded-md h-10 w-10 flex items-center justify-center">
                        <Image
                            src="/icon/headphone.svg"
                            alt="location"
                            height={24}
                            width={24}
                            priority
                        />
                    </div>
                    <div>
                        <p className="font-normal text-sm text-[#6B7280] mb-1">
                            8:30 AM – 10:30 PM
                        </p>
                        <p className="font-semibold text-[#1F2937]">
                            +3628398030
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 border-b md:border-0 border-[#F3F4F6] pb-8 md:pb-0">
                    <div>
                        <p className="font-semibold mb-2 text-[#1F2937]">
                            Download Now on
                        </p>
                        <p className="text-[#6B7280] text-sm">
                            Free home delivery on your first purchase
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Link href="#">
                            <Image
                                src="/image/google-app-store.png"
                                alt="location"
                                height={50}
                                width={130}
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/image/apple-app-store.png"
                                alt="location"
                                height={50}
                                width={130}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold mb-2 text-[#1F2937] ">
                        We Support
                    </p>
                    <div className="flex space-x-3 items-center md:items-start justify-center md:justify-start ">
                        <Image
                            src="/payment/mastercard.png"
                            alt="location"
                            height={20}
                            width={40}
                            className="object-contain"
                            priority
                        />
                        <Image
                            src="/payment/visa.png"
                            alt="location"
                            height={20}
                            width={40}
                            className="object-contain"
                            priority
                        />
                        <Image
                            src="/payment/paypal.png"
                            alt="location"
                            height={20}
                            width={50}
                            className="object-contain"
                            priority
                        />
                        <Image
                            src="/payment/amex.png"
                            alt="location"
                            height={20}
                            width={50}
                            className="object-contain"
                            priority
                        />
                        <Image
                            src="/payment/westernunion.png"
                            alt="location"
                            height={20}
                            width={60}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-[#F3F4F6]">
                <div className="container mx-auto px-6 md:px-10 py-4 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© Copyright 2025 – TailGrids.</p>
                    <div className="flex flex-col md:flex-row gap-4">
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
