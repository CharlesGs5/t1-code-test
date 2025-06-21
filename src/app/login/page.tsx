'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {login} from "@/services/authService";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await login(email, password);
            localStorage.setItem('token', token);
            router.push('/');
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
            <h1 className="text-xl font-bold mb-4">Iniciar sesión</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Iniciar sesión
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </form>

            <p className="text-sm mt-4">
                ¿No tienes una cuenta?{' '}
                <a href="/register" className="text-blue-600 hover:underline">
                    Regístrate aquí
                </a>
            </p>
        </main>
    );
}
