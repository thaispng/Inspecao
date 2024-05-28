'use client';

import Header from "@/components/_ui/Header/Header";
import Card from "@/components/_ui/Card/Card";
import Table from "@/components/_ui/Table/Table";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react"; 

export default function Page() {
  const { data: session, status } = useSession(); 
  const [counts, setCounts] = useState({
    concluida: 0,
    cancelada: 0,
    pendente: 0,
    emAndamento: 0,
    total: 0
  });

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      signIn(); 
    } else {
      const fetchInspections = async () => {
        try {
          const response = await fetch("/api/Form", {
            cache: "no-cache",
          });
          const data = await response.json();
          if (Array.isArray(data.forms)) {
            const countsMap = data.forms.reduce((acc, form) => {
              acc[form.status] = (acc[form.status] || 0) + 1;
              return acc;
            }, {});

            setCounts({
              concluida: countsMap['Concluida'] || 0,
              cancelada: countsMap['Cancelada'] || 0,
              pendente: countsMap['Pendente'] || 0,
              emAndamento: countsMap['Em andamento'] || 0,
              total: data.forms.length
            });
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchInspections();
    }
  }, [session, status]);

  if (status === "loading") {
    
    return null;
  }

  if (!session) {
   
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <Header />
      <div className="container flex flex-col mx-auto w-full p-4 ">
        <div className="flex flex-col w-full text-xl font-semibold text-basic-preto">
          Dashboard
        </div>
        <div className="flex flex-col w-full text-xl font-medium text-basic-preto">
          Status de inspeção
        </div>
        <div className='flex flex-row w-full my-2 gap-2'>
          <Card backgroundColor="bg-green-600" h1='Concluídas'>
            <span className="flex flex-row w-full text-neutral-600 font-semibold text-xl">
              {counts.concluida}
            </span>
          </Card>
          <Card backgroundColor="bg-red-600" h1='Não conforme'>
            <span className="flex flex-row w-full text-neutral-600 font-semibold text-xl">
              {counts.cancelada}
            </span>
          </Card>
          <Card backgroundColor="bg-zinc-600" h1='Pendente'>
            <span className="flex flex-row w-full text-neutral-600 font-semibold text-xl">
              {counts.pendente}
            </span>
          </Card>
          <Card backgroundColor="bg-yellow-600" h1='Em andamento'>
            <span className="flex flex-row w-full text-neutral-600 font-semibold text-xl">
              {counts.emAndamento}
            </span>
          </Card>
          <Card backgroundColor="bg-cyan-600" h1='Total'>
            <span className="flex flex-row w-full text-neutral-600 font-semibold text-xl">
              {counts.total}
            </span>
          </Card>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
}
