'use client';

import Header from "@/components/_ui/Header/Header";
import Card from "@/components/_ui/Card/Card";
import Table from "@/components/_ui/Table/Table";
import { FileCheck } from 'lucide-react';
export default function  Page() {
    return (
        <>
        <Header />
        <div className="container flex flex-col  mx-auto w-full  p-4 bg-neutral-50">
        <div className=" flex flex-col  w-full text-xl font-semibold  text-basic-preto ">Dashboard
        </div>
        <div className="flex flex-col  w-full text-xl font-medium  text-basic-preto ">Status de inspeção</div>
        <div className=' flex flex-row w-full my-2 gap-2'>
                <Card  backgroundColor="bg-green-600" h1='Concluídas'>
                    <div className="flex auto bg-neutral-300 p-1 rounded-md">
                    <FileCheck size={20} color="#737373" />
                    </div>
                </Card>
                <Card  backgroundColor="bg-red-600" h1='Não conforme'>
                </Card>
                <Card backgroundColor="bg-zinc-600" h1='Pendente'>
                </Card>
                <Card backgroundColor="bg-yellow-600" h1='Em andamento'>
                </Card>
                <Card backgroundColor="bg-cyan-600" h1='Total'>
                </Card>
        </div>
        <div>
            <Table />
        </div>
        </div>
        </>

    );
}