'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/login');
        }
    }, [router]);

    return (
        <main className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">
            <Button variant="secondary" onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }}>
                Cerrar sesión
            </Button>
            <h1 className="text-2xl font-bold mb-4">Demo de componentes</h1>

            <Button variant="primary">Aceptar</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>

            <Card image="../../public/globe.svg" header="This is my header" footer="And this is my footer" />

            <Input type="text" placeholder="Write here" label="Write" />

            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Abrir modal
            </Button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size="medium"
                header={<h2>Confirmación</h2>}
                body={<p>¿Estás seguro de que deseas continuar con esta acción?</p>}
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                            Cancelar
                        </Button>
                        <Button variant="danger">Aceptar</Button>
                    </>
                }
            />

            <Link href="/dashboard" className="text-blue-600 hover:underline mt-4 inline-block">
                Ver estadísticas en tiempo real →
            </Link>
        </main>
    );
}
