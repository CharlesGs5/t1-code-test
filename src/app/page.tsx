'use client'

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Demo de componentes</h1>

        { /*Button Component*/ }
        <Button variant="primary">Aceptar</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>

        { /*Card Component*/ }
        <Card image="../../public/globe.svg" header="This is my header" footer="And this is my footer"/>

        { /*Input Component*/ }
        <Input type="text" placeholder="Write here" label="Write"/>

        { /* Modal Button */ }
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
    </main>
  );
}
