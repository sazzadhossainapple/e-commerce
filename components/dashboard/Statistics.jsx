const Statistics = () => {
    const yAxisLabels = [1000, 800, 600, 400, 200, 0];
    const xAxisLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // Custom utility function to simulate the stepped, linear graph look (purely for demonstration)
    const generateLinePoints = (start, end) =>
        Array(12)
            .fill(0)
            .map(
                (_, i) =>
                    `${(i * 100) / 11}% ${Math.floor(
                        start + (end - start) * (i / 11)
                    )}%`
            )
            .join(',');

    // Since we can't draw SVG easily with only Tailwind, we simulate the lines with a div/span structure
    // In a real app, you would use a chart library (like Recharts, Nivo, or Tremor) here.
    const ChartPlaceholder = ({ points, color }) => (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            {/* Example: A simple polyline to simulate the line graph */}
            <polyline
                fill="none"
                stroke={
                    color === 'dark'
                        ? 'rgb(59, 130, 246)'
                        : 'rgb(147, 197, 253)'
                } // blue-600 vs blue-300
                strokeWidth="1.5"
                points={
                    color === 'dark'
                        ? '0,25 9,28 18,22 27,24 36,18 45,20 54,15 63,17 72,12 81,14 90,10 100,8' // Darker line path
                        : '0,50 9,53 18,47 27,49 36,43 45,45 54,40 63,42 72,37 81,39 90,35 100,33' // Lighter line path
                }
            />
        </svg>
    );

    return (
        <div className="max-w-[1000px] bg-white rounded-xl mx-auto border border-gray-100">
            {/* Header Section: Padding and Structure */}
            <header className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-gray-100">
                {/* Title Block */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Statistics
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Target you've set for each month
                    </p>
                </div>

                {/* Navigation Tabs and Date Picker */}
                <div className="flex space-x-3 items-center">
                    {/* Tabs Group */}
                    <div className="flex border border-gray-200 rounded-lg bg-gray-50 p-[3px]">
                        {['Overview', 'Sales', 'Revenue'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-3 py-1 text-sm font-medium rounded-md transition-all whitespace-nowrap 
                  ${
                      tab === 'Sales'
                          ? 'bg-white shadow-sm text-blue-600'
                          : 'text-gray-600 hover:text-gray-800'
                  }`}
                                style={{ lineHeight: '1.25rem' }} // Ensure text is centered vertically
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Date Picker Button */}
                    <button className="flex items-center space-x-1.5 px-3 py-1 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50">
                        {/* Calendar Icon Placeholder (replace with an actual icon component) */}
                        <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                        </svg>
                        <span>05 Feb - 06 March</span>
                    </button>
                </div>
            </header>

            {/* Chart Area: Grid Layout */}
            <div className="grid grid-cols-[55px,1fr] pl-6 pr-6 pt-4 pb-0 h-[320px]">
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between text-right text-xs text-gray-500 pb-5">
                    {yAxisLabels.map((label) => (
                        <span
                            key={label}
                            className="h-full flex items-start justify-end pr-3"
                            style={{ fontSize: '0.75rem' }}
                        >
                            {label !== 0 ? label.toLocaleString() : 0}
                        </span>
                    ))}
                </div>

                {/* Chart Container */}
                <div className="relative border-b border-gray-200 pr-0">
                    {/* Horizontal Grid Lines */}
                    <div className="absolute inset-0 z-0 h-full">
                        {yAxisLabels.slice(0, -1).map((_, index) => (
                            <div
                                key={`grid-h-${index}`}
                                className="absolute w-full border-t border-gray-100"
                                style={{
                                    top: `${
                                        index * (100 / (yAxisLabels.length - 1))
                                    }%`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Lines Placeholder - MUST BE REPLACED BY A CHART LIBRARY */}
                    <div className="absolute inset-0 z-10">
                        {/* This is where your actual chart library component (e.g., Recharts LineChart) goes */}
                        <ChartPlaceholder points="placeholder" color="light" />
                        <ChartPlaceholder points="placeholder" color="dark" />
                    </div>
                </div>
            </div>

            {/* X-Axis Labels (Months) */}
            <div className="flex justify-around text-xs text-gray-500 mt-1 pl-12 pr-6 pb-4">
                {xAxisLabels.map((month) => (
                    <span
                        key={month}
                        className="flex-1 text-center"
                        style={{ fontSize: '0.75rem' }}
                    >
                        {month}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
