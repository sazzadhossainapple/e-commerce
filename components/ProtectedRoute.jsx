'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            router.push('/login');
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) {
        return <Loading />;
    }

    return <>{children}</>;
}
