import Image from 'next/image';

const products = [
    {
        id: 1,
        title: 'White Jacket',
        desc: 'Lightweight & water-resistant',
        price: 249.0,
        image: '/product/White Jacket.png',
    },
    {
        id: 2,
        title: 'Tote Bag',
        desc: 'Spacious & stylish',
        price: 249.0,
        image: '/product/Tote Bag.png',
        badge: 'Hot Item',
    },
    {
        id: 3,
        title: 'Beige Cap',
        desc: 'Soft breathable fabric',
        price: 249.0,
        image: '/product/Beige Cap.png',
        whislist: true,
    },
    {
        id: 4,
        title: 'Qua Watch',
        desc: 'Modern rubber sole',
        price: 249.0,
        image: '/product/Qua Watch.png',
    },
];

export default function Highlights() {
    return (
        <section className="container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-4 text-center ">
                Handpicked Highlights
            </h2>
            <p className="text-[#6B7280] mb-12 max-w-xl leading-relaxed text-md text-center mx-auto">
                There are many variations of available but the majority have
                suffered alteration in some form.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <div className="bg-white transition flex flex-col">
                        {/* Image wrapper */}
                        <div className="relative w-full aspect-[4/5] mb-5">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            {/* Badge */}
                            {item.badge && (
                                <span className="absolute top-5 left-5 bg-[#FEF2F2] text-[#B91C1C] text-sm font-medium px-2 py-1 rounded-3xl">
                                    {item.badge}
                                </span>
                            )}

                            {/* Wishlist Icon */}
                            {item.whislist && (
                                <button
                                    type="button"
                                    className=" cursor-pointer absolute top-5 right-5 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                                >
                                    <Image
                                        src="/icon/heart.svg"
                                        alt="wishlist"
                                        width={20}
                                        height={20}
                                    />
                                </button>
                            )}
                        </div>

                        {/* Content */}
                        <h3 className="text-[#1F2937] flex items-center justify-between mb-2 ">
                            <span className="font-semibold">{item.title}</span>{' '}
                            <span className="font-medium">
                                ${item.price.toFixed(2)}
                            </span>
                        </h3>
                        <p className="text-sm text-[#6B7280] mb-5 font-normal">
                            {item.desc}
                        </p>

                        <div>
                            <button
                                type="button"
                                className="group flex items-center justify-center text-center gap-2 px-4 w-full py-[12px] rounded-lg border border-[#D1D5DB] text-md font-medium transition text-[#1F2937]  hover:text-white hover:border-blue-600 hover:bg-blue-700 cursor-pointer"
                            >
                                <Image
                                    src="/icon/addCart.svg"
                                    alt="cart"
                                    width={20}
                                    height={20}
                                    className="block group-hover:hidden"
                                />
                                <Image
                                    src="/icon/addCartWhite.svg"
                                    alt="cart"
                                    width={20}
                                    height={20}
                                    className="hidden group-hover:block"
                                />
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
