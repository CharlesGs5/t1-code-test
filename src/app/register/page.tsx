'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/services/authService';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const token = await register(email, password);
            localStorage.setItem('token', token);
            router.push('/'); // redirige al home
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error inesperado');
            }
        }
    };

    return (
        <main className="max-w-sm mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Registro</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-green-600 text-white py-2 rounded">
                    Registrarse
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </form>
        </main>
    );
}
