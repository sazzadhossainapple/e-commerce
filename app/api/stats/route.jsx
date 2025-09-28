import { NextResponse } from 'next/server';

export async function GET() {
    const stats = {
        totalOrders: 5359,
        totalRevenue: 254000,
        totalCustomers: 3782,
    };

    return NextResponse.json(stats);
}
