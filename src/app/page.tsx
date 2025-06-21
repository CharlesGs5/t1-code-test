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
        <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Component Demo</h1>
                <Button variant="secondary" onClick={() => {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }}>
                    Log out
                </Button>
            </div>

            {/* Buttons */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">🔘 Buttons</h2>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Accept</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                </div>
            </section>

            {/* Input */}
            <section className="mb-10 max-w-sm">
                <h2 className="text-xl font-semibold mb-2">📩 Input</h2>
                <Input type="text" placeholder="Your name" label="Text" />
                <Input type="email" placeholder="Email" label="Email" status="error" />
                <Input type="password" placeholder="Password" label="Password" status="success" />
                <Input type="text" placeholder="Disabled" label="Disabled" disabled />

            </section>

            {/* Card */}
            <section className="mb-10 max-w-md">
                <h2 className="text-xl font-semibold mb-2">📦 Card</h2>
                <Card header="Header only" />
                <Card header="Header" body="This is the body" />
                <Card header="Header" body="With image" image="/globe.svg" footer="Footer here" />
            </section>

            {/* Modal */}
            <section className="my-12">
                <h2 className="text-xl font-semibold mb-4">🪟 Modal Variants</h2>
                <div className="flex gap-4 flex-wrap">
                    <Button variant="primary" onClick={() => setOpenSize('small')}>Open Small Modal</Button>
                    <Button variant="secondary" onClick={() => setOpenSize('medium')}>Open Medium Modal</Button>
                    <Button variant="danger" onClick={() => setOpenSize('large')}>Open Large Modal</Button>
                </div>

                <Modal
                    isOpen={!!openSize}
                    size={openSize || 'medium'}
                    onClose={() => setOpenSize(null)}
                    header={<h3>Modal {openSize?.toUpperCase()}</h3>}
                    body={<p>This is the {openSize} modal with customizable content.</p>}
                    footer={
                        <div className="flex justify-end gap-2">
                            <Button variant="secondary" onClick={() => setOpenSize(null)}>Cancel</Button>
                            <Button variant="primary">Confirm</Button>
                        </div>
                    }
                />
            </section>

            {/* Dashboard Link */}
            <section className="mt-12">
                <Link href="/dashboard">
                    <Button variant="primary">📊 Go to Real-Time Dashboard</Button>
                </Link>
            </section>
        </main>
    );
}
