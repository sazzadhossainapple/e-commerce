'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: 1,
        brand: 'Samsung',
        title: 'Galaxy S24 Ultra 5G',
        desc: 'Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary AI — Redefine possibilities.',
        price: '$899',
        image: '/banner/product-1.png',
    },
    {
        id: 2,
        brand: 'Samsung',
        title: 'Galaxy Z Flip 5',
        desc: 'Flex window, unique design, and powerful performance.',
        price: '$999',
        image: '/banner/product-1.png',
    },
    {
        id: 2,
        brand: 'Samsung',
        title: 'Galaxy Z Flip 4',
        desc: 'Flex window, unique design, and powerful performance.',
        price: '$700',
        image: '/banner/product-1.png',
    },
];

const recommenedproducts = [
    {
        brand: 'Xiaomi',
        name: 'Smart Security Home Camera',
        href: '#',
        image: '/product/Smart Security Home Camera.png',
    },
    {
        brand: 'Redmi',
        name: 'Smart Watch 5 Lite',
        href: '#',
        image: '/product/Smart Watch 5 Lite.png',
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
            <div className="h-full lg:h-[500px] grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5">
                {/* Left Slider */}
                <div className=" bg-[#111827] rounded-2xl overflow-hidden px-12 py-20 flex flex-col lg:flex-row justify-center items-center gap-8 relative">
                    <div className=" w-full lg:w-[55%] text-center lg:text-start">
                        <span className="text-[#9CA3AF] uppercase text-sm tracking-wide font-medium">
                            {products[current].brand}
                        </span>
                        <h2 className="text-white text-3xl font-bold mt-4 mb-4 ">
                            {products[current].title}
                        </h2>
                        <p className="text-[#9CA3AF] leading-relaxed mb-12 text-md">
                            {products[current].desc}
                        </p>
                        <Link
                            href="#"
                            className="bg-white text-[#1F2937] px-6 py-3 rounded-lg font-medium inline-block w-full md:w-fit"
                        >
                            Buy Now {products[current].price}
                        </Link>
                    </div>

                    {/* Product Image */}
                    <div className=" w-full lg:w-[45%]">
                        <Image
                            src={products[current].image}
                            alt={products[current].title}
                            width={400}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Slider Dots */}
                    <div className="absolute bottom-8 left-[50%] flex space-x-2">
                        {products.map((_, idx) => (
                            <button
                                key={idx}
                                className={`h-1 w-6 rounded-full ${
                                    current === idx ? 'bg-white' : 'bg-gray-600'
                                }`}
                                onClick={() => setCurrent(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Sidebar Ads */}
                <div className="flex flex-col gap-5">
                    {recommenedproducts.map((product, index) => (
                        <div
                            key={index}
                            className="h-full lg:h-[240px] bg-[#F3F4F6] rounded-2xl p-6 flex items-center justify-between gap-8"
                        >
                            <div className="w-[50%]">
                                <span className="text-xs text-[#6B7280] uppercase font-medium">
                                    {product.brand}
                                </span>
                                <h3 className="text-lg font-semibold mt-2 mb-5 text-[#374151]">
                                    {product.name}
                                </h3>
                                <Link
                                    href={product.href}
                                    className="mt-3 inline-block bg-[#3758F9] text-white text-sm px-4 py-2 rounded-lg font-medium"
                                >
                                    Shop Now
                                </Link>
                            </div>
                            <div className="w-[50%] mx-auto">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="object-contain h-[200px] w-[200px] mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
