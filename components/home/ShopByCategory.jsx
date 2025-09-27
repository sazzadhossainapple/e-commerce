'use client';
import Image from 'next/image';

const categories = [
    {
        name: 'DSLR Camera',
        products: 50,
        image: '/shopCategory/DSLR Camera.png',
    },
    {
        name: 'Wireless Earbuds',
        products: 45,
        image: '/shopCategory/Wireless Earbuds.png',
    },
    {
        name: 'Wristwatch',
        products: 57,
        image: '/shopCategory/Wristwatch.png',
    },
    {
        name: 'SkyFlyer Drone',
        products: 86,
        image: '/shopCategory/SkyFlyer Drone.png',
    },
    {
        name: 'Smart Speaker',
        products: 38,
        image: '/shopCategory/Smart Speaker.png',
    },
];

export default function ShopByCategory() {
    return (
        <section className="bg-[#F3F4F6]">
            <div className="container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-4 text-center md:text-start">
                    Shop by Category
                </h2>
                <p className="text-[#6B7280] mb-12 max-w-xl leading-relaxed text-md text-center md:text-start">
                    Explore our curated selection of products across premium
                    categories, from everyday essentials to exclusive limited
                    collections.
                </p>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-3 flex flex-col items-center text-center cursor-pointer"
                        >
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={300}
                                    height={300}
                                    className="object-cover rounded-md w-full h-full"
                                />
                            </div>
                            <h3 className="text-[#1F2937] font-semibold mb-2">
                                {category.name}
                            </h3>
                            <p className="text-[#6B7280] text-sm fw-medium pb-4">
                                {category.products} Products
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
