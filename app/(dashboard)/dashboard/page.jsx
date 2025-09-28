'use client';
import MonthlySalesCard from '@/components/dashboard/MonthlySalesCard';
import RadialTargetCard from '@/components/dashboard/RadialTargetCard';
import StatCard from '@/components/dashboard/StatCard';
import {
    Users,
    Package,
    MoreVertical,
    ChevronUp,
    ChevronDown,
} from 'lucide-react';

export default function DashboardPage() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Stat Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <StatCard
                        title="Customers"
                        icon={Users}
                        value="3,782"
                        percentage="11.01%"
                        isPositive={true}
                    />
                    <StatCard
                        title="Orders"
                        icon={Package}
                        value="5,359"
                        percentage="9.05%"
                        isPositive={false}
                    />
                </div>

                {/* Monthly Target Card  */}
                <div className="lg:col-span-1 row-span-2">
                    <RadialTargetCard />
                </div>

                {/* Monthly Sales Card */}
                <MonthlySalesCard />
            </div>
        </div>
    );
}
