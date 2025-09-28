'use client';
import Image from 'next/image';

// Helper component for Status Badges
const StatusBadge = ({ status, color }) => {
    let bgColorClass = '';
    let textColorClass = '';

    switch (color) {
        case 'green':
            bgColorClass = 'bg-green-50';
            textColorClass = 'text-green-700';
            break;
        case 'orange':
            bgColorClass = 'bg-orange-50';
            textColorClass = 'text-orange-700';
            break;
        case 'red':
            bgColorClass = 'bg-red-50';
            textColorClass = 'text-red-700';
            break;
        default:
            bgColorClass = 'bg-gray-50';
            textColorClass = 'text-gray-700';
            break;
    }

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColorClass} ${textColorClass}`}
        >
            {status}
        </span>
    );
};

const ProductTableRow = ({ product }) => (
    <tr className="hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            <div className="flex items-center gap-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover w-10 h-10"
                />
                <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-gray-500 text-xs">
                        {product.variants} Variants
                    </p>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.category}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
            ${product.price.toFixed(2)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            <StatusBadge status={product.status} color={product.statusColor} />
        </td>
    </tr>
);

export default ProductTableRow;
