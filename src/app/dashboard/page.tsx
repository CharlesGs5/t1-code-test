'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import { getComponentStats, exportCSV, exportJSON } from '@/services/trackingService';

type Stats = {
    component: string;
    variant: string;
    count: number;
};

export default function Dashboard() {
    const router = useRouter();
    const [stats, setStats] = useState<Stats[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/login');
        }

        let isMounted = true;

        const fetchStats = async () => {
            try {
                const data = await getComponentStats();
                if (isMounted) {
                    setStats(data);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error fetching stats:', err);
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 5000); // cada 5s

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [router]);

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-8 max-w-screen-lg mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">📊 Real-Time Analytics Dashboard</h1>
                <Button variant="secondary" onClick={() => {
                    localStorage.removeItem('token');
                    router.push('/login');
                }}>
                    Log out
                </Button>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-4 mb-6">
                <Button variant="primary" onClick={exportCSV}>Export CSV</Button>
                <Button variant="secondary" onClick={exportJSON}>Export JSON</Button>
            </div>

            {/* Stats Table or Loading */}
            {loading ? (
                <p className="text-gray-500">Loading statistics...</p>
            ) : (
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="text-left px-4 py-3 border-b">Component</th>
                            <th className="text-left px-4 py-3 border-b">Variant</th>
                            <th className="text-left px-4 py-3 border-b">Usage Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stats.map(({ component, variant, count }, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3 border-b">{component}</td>
                                <td className="px-4 py-3 border-b capitalize">{variant}</td>
                                <td className="px-4 py-3 border-b font-semibold">{count}</td>
                            </tr>
                        ))}
                        {stats.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-gray-400">
                                    No data available yet.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
