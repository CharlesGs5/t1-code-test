import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  return (
    <main className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Demo de componentes</h1>

        <Button variant="primary"> Aceptar</Button>
        <Card/>
        <Input/>
        <Modal/>
    </main>
  );
}
