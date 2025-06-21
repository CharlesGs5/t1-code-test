'use client';

import { useEffect, useState } from 'react';
import {exportCSV, exportJSON, fetchStats} from '@/services/trackingService';

export default function DashboardPage() {
    const [stats, setStats] = useState<any[]>([]);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await fetchStats();
                setStats(data);
            } catch (error) {
                console.error(error,'Error al cargar estadísticas');
            }
        };

        loadStats();

        const interval = setInterval(loadStats, 5000); // Actualiza cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">📊 Estadísticas en tiempo real</h1>

            <table className="w-full text-sm border-collapse border">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="border px-2 py-1">Componente</th>
                    <th className="border px-2 py-1">Variante</th>
                    <th className="border px-2 py-1">Interacciones</th>
                </tr>
                </thead>
                <tbody>
                {stats.map((item, idx) => (
                    <tr key={idx}>
                        <td className="border px-2 py-1">{item.component}</td>
                        <td className="border px-2 py-1">{item.variant}</td>
                        <td className="border px-2 py-1">{item.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button
                onClick={exportCSV}
                className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Exportar CSV
            </button>

            <button
                onClick={exportJSON}
                className="mb-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Exportar JSON
            </button>

        </main>
    );
}
