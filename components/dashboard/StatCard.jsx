'use client';
import {
    Users,
    Package,
    MoreVertical,
    ChevronUp,
    ChevronDown,
} from 'lucide-react';
const StatCard = ({ title, icon: Icon, value, percentage, isPositive }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
        <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-100 rounded-lg text-gray-700">
                <Icon size={24} />
            </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">{title}</p>
        <div className="flex items-center justify-between mt-1">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <div
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    isPositive
                        ? 'bg-[#ECFDF3] text-green-700'
                        : 'bg-[#FEF3F2] text-red-700'
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
