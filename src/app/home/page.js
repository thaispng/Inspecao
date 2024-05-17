import { getServerSession } from "next-auth";
import Header from "@/components/_ui/Header/Header";
import Card from "@/components/_ui/Card/Card";
import Table from "@/components/_ui/Table/Table";

export default async function Page() {
    const session = await getServerSession();
    if (!session) {
        redirect('/');
    }
    return (
        <>
        <Header />
        <div className="container flex flex-col  mx-auto w-full my-9 gap-1">
        <div className=" flex flex-col  w-full text-xl font-semibold  text-basic-preto ">Dashboard
        </div>
        <div className="flex flex-col  w-full text-xl font-medium  text-basic-preto ">Status de inspeção, {session?.user?.name}</div>
        <div className=' flex flex-row w-full my-8 gap-1'>
                <Card  backgroundColor="bg-green-600" h1='Concluídas'>
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