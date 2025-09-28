'use client';
import {
    Users,
    Package,
    MoreVertical,
    ChevronUp,
    ChevronDown,
} from 'lucide-react';

const MonthlySalesCard = () => {
    // Placeholder data for the bars
    const salesData = [
        { month: 'Jan', height: 400, isHighlight: false },
        { month: 'Feb', height: 750, isHighlight: true }, // Highlighted blue bar
        { month: 'Mar', height: 450, isHighlight: false },
        { month: 'Apr', height: 250, isHighlight: false },
        { month: 'May', height: 480, isHighlight: false },
        { month: 'Jun', height: 620, isHighlight: false },
        { month: 'Jul', height: 720, isHighlight: false },
        { month: 'Aug', height: 350, isHighlight: false },
        { month: 'Sep', height: 600, isHighlight: false },
        { month: 'Oct', height: 300, isHighlight: false },
        { month: 'Nov', height: 500, isHighlight: false },
        { month: 'Dec', height: 550, isHighlight: false },
    ];

    // Max height for scaling the bars relative to the container height
    const MAX_HEIGHT = 800;
    const CHART_HEIGHT = '16rem'; // 256px, a good height for Tailwind layout

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    Monthly Sales
                </h3>
                <MoreVertical
                    size={20}
                    className="text-gray-400 cursor-pointer"
                />
            </div>

            <div className="flex flex-col flex-grow">
                {/* Y-Axis Labels */}
                <div className="grid grid-cols-1 gap-4 text-xs text-gray-500 mb-2">
                    <p className="h-0 text-left">800</p>
                    <p className="h-0 text-left -translate-y-4">600</p>
                    <p className="h-0 text-left -translate-y-4">400</p>
                    <p className="h-0 text-left -translate-y-4">200</p>
                    <p className="h-0 text-left -translate-y-4">0</p>
                </div>

                {/* Chart Area */}
                <div
                    className="relative flex items-end pt-4"
                    style={{ height: CHART_HEIGHT }}
                >
                    {/* Y-Axis Grid Lines (Basic approximation) */}
                    <div className="absolute w-full h-full border-b border-gray-200 pointer-events-none">
                        <div className="absolute w-full border-t border-gray-100 top-1/4"></div>
                        <div className="absolute w-full border-t border-gray-100 top-1/2"></div>
                        <div className="absolute w-full border-t border-gray-100 top-3/4"></div>
                    </div>

                    {/* Bars */}
                    <div className="flex w-full h-full items-end justify-between px-2 z-10">
                        {salesData.map((data) => (
                            <div
                                key={data.month}
                                className="w-4 flex flex-col items-center justify-end"
                            >
                                <div
                                    className={`w-full rounded-t-sm transition-all duration-300 ${
                                        data.isHighlight
                                            ? 'bg-[#3758F9]' // Blue highlight
                                            : 'bg-gray-100' // Default gray
                                    }`}
                                    style={{
                                        height: `${
                                            (data.height / MAX_HEIGHT) * 100
                                        }%`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* X-Axis Labels (Months) */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    {salesData.map((data) => (
                        <span key={data.month} className="w-4 text-center">
                            {data.month}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonthlySalesCard;
