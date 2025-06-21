'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const [openSize, setOpenSize] = useState<'small' | 'medium' | 'large' | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/login');
        }
    }, [router]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-6 py-10 text-white">
            <div className="max-w-screen-xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-semibold text-white mb-4">✨ Component Demo</h1>
                        <p className="text-lg font-semibold text-white mb-4">Interactive and styled UI elements</p>
                    </div>
                    <Button variant="secondary" onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/login';
                    }}>
                        Log out
                    </Button>
                </div>

                {/* Buttons */}
                <section className="mb-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">🔘 Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Accept</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                    </div>
                </section>

                {/* Input */}
                <section className="mb-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">📩 Inputs</h2>
                    <div className="space-y-4">
                        <Input type="text" placeholder="Your name" label="Text" />
                        <Input type="email" placeholder="Email" label="Email" status="error" />
                        <Input type="password" placeholder="Password" label="Password" status="success" />
                        <Input type="text" placeholder="Disabled" label="Disabled" disabled />
                    </div>
                </section>

                {/* Card */}
                <section className="mb-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">📦 Cards</h2>
                    <div className="space-y-6">
                        <Card header="Header only" />
                        <Card header="Header" body="This is the body" />
                        <Card header="Header" body="With image" image="/globe.svg" footer="Footer here" />
                    </div>
                </section>

                {/* Modal */}
                <section className="mb-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">🪟 Modal Variants</h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button variant="primary" onClick={() => setOpenSize('small')}>Open Small Modal</Button>
                        <Button variant="secondary" onClick={() => setOpenSize('medium')}>Open Medium Modal</Button>
                        <Button variant="danger" onClick={() => setOpenSize('large')}>Open Large Modal</Button>
                    </div>

                    <Modal
                        isOpen={!!openSize}
                        size={openSize || 'medium'}
                        onClose={() => setOpenSize(null)}
                        header={<h3 className="text-lg font-bold">Modal {openSize?.toUpperCase()}</h3>}
                        body={<p>This is the <strong>{openSize}</strong> modal with customizable content.</p>}
                        footer={
                            <div className="flex justify-end gap-2">
                                <Button variant="secondary" onClick={() => setOpenSize(null)}>Cancel</Button>
                                <Button variant="primary">Confirm</Button>
                            </div>
                        }
                    />
                </section>

                {/* Dashboard Link */}
                <section className="text-center mt-16">
                    <Link href="/dashboard">
                        <Button variant="primary">📊 Go to Real-Time Dashboard</Button>
                    </Link>
                </section>
            </div>
        </main>
    );
}
