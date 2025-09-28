'use client';
import { MoreVertical, ChevronUp, ChevronDown } from 'lucide-react';

const RadialTargetCard = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border border-gray-100 bg-white ">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    Monthly Target
                </h3>
                <MoreVertical
                    size={20}
                    className="text-gray-400 cursor-pointer"
                />
            </div>
            <p className="text-sm text-gray-500 -mt-4 mb-6">
                Target you've set for each month
            </p>

            <div className="flex justify-center items-center relative my-4">
                <div className="relative w-48 h-24 overflow-hidden">
                    <div className="absolute w-48 h-48 rounded-full border-[12px] border-gray-100" />

                    <div
                        className="absolute w-48 h-48 rounded-full border-[12px] border-solid border-transparent"
                        style={{
                            borderColor:
                                'transparent transparent #3758F9 #3758F9',
                            transform: 'rotate(80deg)',
                        }}
                    />
                </div>

                {/* Inner Content (Centered over the arc) */}
                <div className="absolute top-[70px] flex flex-col items-center justify-center -translate-y-6">
                    <p className="text-4xl font-bold text-gray-900">75.55%</p>
                    <div className="flex items-center text-sm font-semibold text-green-600 mt-1">
                        <ChevronUp size={18} />
                        <span>+10%</span>
                    </div>
                </div>
            </div>
            {/* Text */}
            <p className="text-center text-sm text-gray-600 mt-4 mb-6">
                You earn $3287 today, its higher than last month. Keep up your
                good work!
            </p>
        </div>

        {/* Footer Stats (Matching colors and design) */}
        <div className="flex justify-around  bg-gray-100 pt-4">
            <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Target</p>
                <div className="flex items-center text-base font-semibold text-gray-900">
                    $20K
                    <ChevronDown size={16} className="text-red-500 ml-1" />
                </div>
            </div>
            <div className="text-center border-l border-r border-gray-100 px-4">
                <p className="text-sm text-gray-500 mb-1">Revenue</p>
                <div className="flex items-center text-base font-semibold text-gray-900">
                    $16K
                    <ChevronUp size={16} className="text-green-500 ml-1" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Today</p>
                <div className="flex items-center text-base font-semibold text-gray-900">
                    $1.5K
                    <ChevronUp size={16} className="text-green-500 ml-1" />
                </div>
            </div>
        </div>
    </div>
);

export default RadialTargetCard;
