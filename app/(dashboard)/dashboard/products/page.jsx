'use client';
import Pagination from '@/components/Pagination';
import ProductTableRow from '@/components/ProductTableRow';

import { Search, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Dummy data to populate the table (replace with actual API data)
const products = [
    {
        id: 'p1',
        image: '/images/macbook.png', // Placeholder image path
        name: 'Macbook pro 13"',
        variants: 2,
        category: 'Laptop',
        price: 2399.0,
        status: 'Delivered',
        statusColor: 'green',
    },
    {
        id: 'p2',
        image: '/images/apple-watch.png',
        name: 'Apple Watch Ultra',
        variants: 1,
        category: 'Watch',
        price: 879.0,
        status: 'Pending',
        statusColor: 'orange',
    },
    {
        id: 'p3',
        image: '/images/iphone.png',
        name: 'iPhone 15 Pro Max',
        variants: 2,
        category: 'Smart Phone',
        price: 1869.0,
        status: 'Delivered',
        statusColor: 'green',
    },
    {
        id: 'p4',
        image: '/images/ipad.png',
        name: 'iPad Pro 3rd Gen',
        variants: 2,
        category: 'Electronics',
        price: 1699.0,
        status: 'Canceled',
        statusColor: 'red',
    },
    {
        id: 'p5',
        image: '/images/airpods.png',
        name: 'Airpods Pro 2nd Gen',
        variants: 1,
        category: 'Accessories',
        price: 240.0,
        status: 'Delivered',
        statusColor: 'green',
    },
    {
        id: 'p6',
        image: '/images/airpods.png',
        name: 'Airpods Pro 2nd Gen',
        variants: 1,
        category: 'Accessories',
        price: 240.0,
        status: 'Delivered',
        statusColor: 'green',
    },
    {
        id: 'p7',
        image: '/images/airpods.png',
        name: 'Airpods Pro 2nd Gen',
        variants: 1,
        category: 'Accessories',
        price: 240.0,
        status: 'Delivered',
        statusColor: 'green',
    },
];

export default function ProductsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Dummy total pages

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            {' '}
            {/* Adjusted background for context */}
            <div className=" bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    All products
                </h2>

                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            readOnly // Make it read-only for date picker behavior
                            value="05 Feb - 06 March"
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
                        />
                    </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Products
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Category
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {products.map((product) => (
                                <ProductTableRow
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
