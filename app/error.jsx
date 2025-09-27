'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 relative">
            {/* Top image */}
            <div className="absolute top-0 right-0">
                <Image
                    src="/image/top_error.png"
                    alt="arrow-left"
                    width={300}
                    height={300}
                    priority
                    className="w-24 sm:w-48 md:w-72" // responsive width
                />
            </div>

            {/* Bottom image */}
            <div className="absolute bottom-0 left-0">
                <Image
                    src="/image/buttom_error.png"
                    alt="arrow-left"
                    width={300}
                    height={300}
                    priority
                    className="w-24 sm:w-48 md:w-72" // responsive width
                />
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-medium mb-4 text-[#1F2937]">
                404
            </h1>

            <p className="mb-3 text-2xl sm:text-3xl md:text-3xl font-semibold text-[#1F2937] text-center">
                Page Not Found
            </p>

            <p className="mb-6 text-xs sm:text-sm md:text-base text-[#6B7280] font-normal max-w-xs sm:max-w-md md:max-w-lg text-center">
                Don't worry, you can head back to the homepage or use the
                navigation menu to find what you need
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 border border-[#D1D5DB] text-[#1F2937] px-6 py-2 rounded-[8px] font-medium w-full sm:w-auto"
                >
                    <Image
                        src="/icon/Arrow-left.svg"
                        alt="arrow-left"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-6 sm:h-6 object-cover"
                        priority
                    />
                    Go back
                </Link>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 border border-[#3758F9] text-white bg-[#3758F9] px-6 py-2 rounded-[8px] font-medium w-full sm:w-auto"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
