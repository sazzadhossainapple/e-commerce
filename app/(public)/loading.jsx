'use client';

export default function Loading() {
    return (
        <div className="container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
            <div className="h-full lg:h-[500px] grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5">
                {/* Left Skeleton */}
                <div className="bg-[#111827] rounded-2xl overflow-hidden px-12 py-20 flex flex-col lg:flex-row justify-center items-center gap-8 animate-pulse">
                    <div className="w-full lg:w-[55%] space-y-4">
                        <div className="h-4 w-24 bg-gray-700 rounded"></div>
                        <div className="h-8 w-48 bg-gray-600 rounded"></div>
                        <div className="h-4 w-full bg-gray-700 rounded"></div>
                        <div className="h-10 w-32 bg-gray-500 rounded mt-4"></div>
                    </div>

                    <div className="w-full lg:w-[45%] flex justify-center">
                        <div className="h-56 w-56 bg-gray-700 rounded-xl"></div>
                    </div>
                </div>

                {/* Right Sidebar Skeleton */}
                <div className="flex flex-col gap-5">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="h-full lg:h-[240px] bg-gray-200 rounded-2xl p-6 flex items-center justify-between gap-8 animate-pulse"
                        >
                            <div className="w-[50%] space-y-3">
                                <div className="h-3 w-20 bg-gray-300 rounded"></div>
                                <div className="h-5 w-32 bg-gray-400 rounded"></div>
                                <div className="h-8 w-24 bg-gray-500 rounded mt-4"></div>
                            </div>
                            <div className="w-[50%] flex justify-center">
                                <div className="h-28 w-28 bg-gray-400 rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
