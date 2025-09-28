'use client';
const StatusBadge = ({ status }) => {
    let bgColorClass = '';
    let textColorClass = '';

    switch (status) {
        case 'Delivered':
            bgColorClass = 'bg-green-50';
            textColorClass = 'text-green-700';
            break;
        case 'Pending':
            bgColorClass = 'bg-orange-50';
            textColorClass = 'text-orange-700';
            break;
        case 'Canceled':
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

const OrdersTableRow = ({ order }) => {
    return (
        <tr className="hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {order?.id || 'N/A'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {order?.customer || 'N/A'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {order?.amount || 'N/A'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-center">
                <StatusBadge status={order?.status || 'N/A'} />
            </td>
        </tr>
    );
};

export default OrdersTableRow;
