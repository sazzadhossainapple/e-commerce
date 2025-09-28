'use client';
import MonthlySalesCard from '@/components/dashboard/MonthlySalesCard';
import RadialTargetCard from '@/components/dashboard/RadialTargetCard';
import StatCard from '@/components/dashboard/StatCard';
import Loading from '@/components/Loading';
import axios from 'axios';
import { Users, Package } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.get('/api/stats');
                setStats(data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    if (loading) return <Loading />;

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Stat Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <StatCard
                        title="Customers"
                        icon={Users}
                        value={stats.totalCustomers.toLocaleString()}
                        percentage="11.01%"
                        isPositive={true}
                    />
                    <StatCard
                        title="Orders"
                        icon={Package}
                        value={stats.totalOrders.toLocaleString()}
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
