import { NextResponse } from 'next/server';

export async function GET() {
    const orders = [
        { id: 'o1', customer: 'John Doe', amount: 2399, status: 'Delivered' },
        { id: 'o2', customer: 'Jane Smith', amount: 879, status: 'Pending' },
        {
            id: 'o3',
            customer: 'Alice Brown',
            amount: 1869,
            status: 'Delivered',
        },
    ];

    return NextResponse.json(orders);
}
