// components/Testimonials.jsx
import Image from 'next/image';
// data/testimonials.js
export const testimonials = [
    {
        name: 'Kathryn Murphy',
        role: 'CEO',
        image: '/image/test-1.png',
        quote: 'Working with this team has been a game-changer — their attention to detail, creativity, and commitment to deadlines exceeded every expectation I had.',
    },
    {
        name: 'Theresa Webb',
        role: 'Web Designer',
        image: '/image/test-2.png',
        quote: 'What impressed me most wasn’t just the design, but how deeply they cared about delivering something that made a difference for our users.',
    },
    {
        name: 'Jerome Bell',
        role: 'Marketing Coordinator',
        image: '/image/test-3.png',
        quote: 'From the initial consultation to the final delivery, the process was seamless and incredibly professional — I’ve never felt more confident in a partnership.',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#F3F4F6]">
            <div className="container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
                {/* Section Heading */}
                <div className="mb-12">
                    <span className="text-sm font-medium text-[#3758F9] bg-[#3758F90D] px-3 py-2 rounded-md tracking-wide">
                        Testimonial
                    </span>
                    <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-[#1F2937] mb-4 text-center md:text-start">
                        Hear from Our Happy Customers
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl transition flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex text-[#FACC15] mb-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <svg
                                        key={idx}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[#6B7280] mb-6 text-sm leading-relaxed font-normal">
                                “{t.quote}”
                            </p>

                            {/* User */}
                            <div className="flex items-center mt-auto">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div className="ml-3">
                                    <p className="text-[#374151] font-medium text-sm">
                                        {t.name}
                                    </p>
                                    <p className="text-[#6B7280] font-normal text-xs">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
