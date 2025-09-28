import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        {
            id: 'p1',
            image: '/image/macbook.png',
            name: 'Macbook Pro 13"',
            variants: 2,
            category: 'Laptop',
            price: 2399.0,
            status: 'Delivered',
            statusColor: 'green',
            stock: 12,
        },
        {
            id: 'p2',
            image: '/image/apple-watch.png',
            name: 'Apple Watch Ultra',
            variants: 1,
            category: 'Watch',
            price: 879.0,
            status: 'Pending',
            statusColor: 'orange',
            stock: 5,
        },
        {
            id: 'p3',
            image: '/image/iphone.png',
            name: 'iPhone 15 Pro Max',
            variants: 2,
            category: 'Smart Phone',
            price: 1869.0,
            status: 'Delivered',
            statusColor: 'green',
            stock: 8,
        },
        {
            id: 'p4',
            image: '/image/ipad.png',
            name: 'iPad Pro 3rd Gen',
            variants: 2,
            category: 'Electronics',
            price: 1699.0,
            status: 'Canceled',
            statusColor: 'red',
            stock: 0,
        },
        {
            id: 'p5',
            image: '/image/airpods.png',
            name: 'Airpods Pro 2nd Gen',
            variants: 1,
            category: 'Accessories',
            price: 240.0,
            status: 'Delivered',
            statusColor: 'green',
            stock: 25,
        },
    ];

    return NextResponse.json(products);
}
