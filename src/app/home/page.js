import { getServerSession } from "next-auth";

export default async function Page() {
    const session = await getServerSession();
    if (!session) {
        redirect('/');
    }
    return (
        <div className="container mx-auto">
        <h1 className="text-4xl text-center text-preto ">Olá, {session?.user?.name}</h1>
        </div>
    );
}