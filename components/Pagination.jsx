'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pages = [];
        const siblings = 1;

        // Always show first two pages
        for (let i = 1; i <= Math.min(2, totalPages); i++) {
            pages.push(i);
        }

        // Left dots
        if (currentPage > siblings + 3) {
            pages.push('...');
        }

        // Pages around currentPage
        const start = Math.max(3, currentPage - siblings);
        const end = Math.min(totalPages - 2, currentPage + siblings);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // Right dots
        if (currentPage < totalPages - (siblings + 2)) {
            pages.push('...');
        }

        // Always show last two pages
        for (let i = Math.max(totalPages - 1, 3); i <= totalPages; i++) {
            if (i > 2) pages.push(i);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <nav className="border-t border-gray-100">
            <div className=" flex items-center justify-between px-4 sm:px-6 py-3 "></div>
            <div className="flex-1 flex justify-end lg:justify-between">
                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={16} className="mr-2" />
                    Previous
                </button>

                {/* Page numbers */}
                <div className="hidden sm:flex ml-4 gap-x-2">
                    {pageNumbers.map((page, idx) =>
                        page === '...' ? (
                            <span
                                key={idx}
                                className="px-3 py-2 text-sm font-medium text-gray-400"
                            >
                                ...
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                disabled={page === currentPage}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    page === currentPage
                                        ? 'bg-blue-600 text-white cursor-default'
                                        : 'text-gray-700 bg-white hover:bg-gray-50'
                                }`}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                    <ChevronRight size={16} className="ml-2" />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
