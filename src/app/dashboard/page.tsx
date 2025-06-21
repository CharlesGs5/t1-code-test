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

        fetchStats();
        const interval = setInterval(fetchStats, 5000);
        return () => clearInterval(interval);
    }, [router]);

    const fetchStats = async () => {
        try {
            const data = await getComponentStats();
            setStats(data);
        } catch (err) {
            console.error('Error fetching stats:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-6 py-10 text-white">
            <div className="max-w-screen-lg mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-white">📊 Real-Time Dashboard</h1>
                        <p className="text-sm text-gray-400 mt-1">Track how users interact with components</p>
                    </div>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            localStorage.removeItem('token');
                            router.push('/login');
                        }}
                    >
                        Log out
                    </Button>
                </div>

                {/* Export Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="primary" onClick={exportCSV}>Export CSV</Button>
                    <Button variant="secondary" onClick={exportJSON}>Export JSON</Button>
                </div>

                {/* Stats Table */}
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-white">Usage Stats</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-sm">
                            <thead className="text-left text-gray-300">
                            <tr>
                                <th className="px-4 py-2">Component</th>
                                <th className="px-4 py-2">Variant</th>
                                <th className="px-4 py-2">Count</th>
                            </tr>
                            </thead>
                            <tbody>
                            {stats.map(({ component, variant, count }, index) => (
                                <tr key={index} className="hover:bg-white/10 transition">
                                    <td className="px-4 py-2">{component}</td>
                                    <td className="px-4 py-2 capitalize">{variant}</td>
                                    <td className="px-4 py-2 font-semibold">{count}</td>
                                </tr>
                            ))}
                            {stats.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={3} className="text-center text-gray-500 py-6">
                                        No data available yet
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}
