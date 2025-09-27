import Image from 'next/image';

export default function PromoBanner() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
            {/* Left Image */}
            <div className="flex justify-center">
                <div className="relative w-full  aspect-square">
                    <Image
                        src="/image/promo-1.jpg"
                        alt="Promo Bag 1"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* Center Offer */}
            <div className="text-center bg-[#F3F4F6] rounded-xl p-8 flex justify-center items-center">
                <div>
                    <h3 className="text-3xl font-semibold text-[#1F2937] mb-4 w-full md:w-[220px] mx-auto">
                        Don’t Miss Out 50% OFF
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-7">
                        Get 50% Off – Limited Time Only. Refresh your wardrobe
                        with modern essentials.
                    </p>
                    <button className="bg-[#3758F9] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm cursor-pointer">
                        Shop now
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
                <div className="relative w-full  aspect-square">
                    <Image
                        src="/image/promo-2.jpg"
                        alt="Promo Bag 1"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
