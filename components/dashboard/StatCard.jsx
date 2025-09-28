'use client';
import {
    Users,
    Package,
    MoreVertical,
    ChevronUp,
    ChevronDown,
} from 'lucide-react';
const StatCard = ({ title, icon: Icon, value, percentage, isPositive }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-36">
        <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-100 rounded-lg text-gray-700">
                <Icon size={24} />
            </div>
            <p className="text-sm text-gray-500">{title}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    isPositive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                }`}
            >
                {isPositive ? (
                    <ChevronUp size={16} />
                ) : (
                    <ChevronDown size={16} />
                )}
                {percentage}
            </div>
        </div>
    </div>
);

export default StatCard;
