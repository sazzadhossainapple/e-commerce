'use client';
import { MoreVertical } from 'lucide-react';

const MonthlySalesCard = () => {
    const monthlyData = [
        { label: 'Jan', value: 480 },
        { label: 'Feb', value: 720 },
        { label: 'Mar', value: 400 }, // highlighted
        { label: 'Apr', value: 600 },
        { label: 'May', value: 320 },
        { label: 'Jun', value: 670 },
        { label: 'Jul', value: 480 },
        { label: 'Aug', value: 680 },
        { label: 'Sep', value: 520 },
        { label: 'Oct', value: 600 },
        { label: 'Nov', value: 370 },
        { label: 'Dec', value: 540 },
    ];

    const max = Math.max(...monthlyData.map((m) => m.value));
    const steps = 4;
    const stepValue = Math.ceil(max / steps / 10) * 10;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2 flex flex-col overflow-x-auto lg:overflow-x-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-gray-900">Monthly Sales</p>
                <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>

            {/* Chart */}
            <div className="relative h-50 flex flex-col mt-6 ">
                <div className="flex flex-1">
                    {/* Y-axis labels */}
                    <div className="relative w-10">
                        {Array.from({ length: steps + 1 }).map((_, i) => {
                            const value = i * stepValue;
                            return (
                                <div
                                    key={i}
                                    className="absolute right-1 text-xs text-gray-500 font-normal"
                                    style={{
                                        bottom: `${(i / steps) * 100}%`,
                                        transform: 'translateY(50%)',
                                    }}
                                >
                                    {value}
                                </div>
                            );
                        })}
                    </div>

                    {/* Bars + grid */}
                    <div className="relative flex-1 grid grid-cols-12 gap-2 items-end">
                        {/* Horizontal grid lines */}
                        {Array.from({ length: steps + 1 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute left-0 right-0 border-t border-gray-100 z-0"
                                style={{ bottom: `${(i / steps) * 100}%` }}
                            />
                        ))}

                        {monthlyData.map((m) => (
                            <div
                                key={m.label}
                                className="flex flex-col items-center h-full justify-end relative z-10"
                            >
                                {/* Bar */}
                                <div
                                    className="w-5 rounded-t-md transition-all"
                                    style={{
                                        height: `${(m.value / max) * 100}%`,
                                        backgroundColor:
                                            m.label === 'Mar'
                                                ? '#3758F9'
                                                : '#E5E7EB',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* X-axis months */}
                <div className="grid grid-cols-12 gap-2 mt-2">
                    {monthlyData.map((m) => (
                        <span
                            key={m.label}
                            className="text-xs text-gray-500 text-center"
                        >
                            {m.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonthlySalesCard;
