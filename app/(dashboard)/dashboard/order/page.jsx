'use client';
import Loading from '@/components/Loading';
import OrdersTableRow from '@/components/OrdersTableRow';
import Pagination from '@/components/Pagination';
import ProductTableRow from '@/components/ProductTableRow';
import axios from 'axios';
import { Search, CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // You can calculate this dynamically if API supports pagination

    useEffect(() => {
        async function fetchOrders() {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.get('/api/orders');
                setOrders(data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchOrders();
    }, []);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    if (loading) return <Loading />;

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
                    <h2 className="text-md font-semibold text-gray-900">
                        All Orders
                    </h2>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4">
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
                                readOnly
                                value="05 Feb - 06 March"
                                className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto w-full">
                    <div className="min-w-[700px]">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {orders.map((orders) => (
                                    <OrdersTableRow
                                        key={orders.id}
                                        order={orders}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
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
