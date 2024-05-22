"use client";
import { useState } from "react";
import React from "react";
import Button from "@/components/_ui/Button/Button";
import Input from "@/components/_ui/Input/Input";
import Logo from "@/components/_ui/Logo/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function RegisterPage() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !password) {
      setError("Preencha todos os campos para continuar.");
      return;
    }
    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Usuário já cadastrado.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        const data = await res.json();
        console.error("Usuário não criado:", data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error("Erro durante a criação do usuário:", error);
      setError(
        "Erro durante a criação do usuário, tente novamente mais tarde."
      );
    }
  };

  return (
    <>
      <div className="inicial-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-basic-branco w-[500px] h-[auto] flex flex-col justify-center items-center rounded shadow-m shadow-cinza-claro gap-4 p-8"
        >
          <div className="flex justify-center items-center gap-4">
            <Logo width={75} height={75} />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-2xl text-neutral-900 w-full flex">
              Registre-se
            </h1>
            <p className="text-neutral-500 text-base flex w-full">
              Crie uma conta para continuar
            </p>
          </div>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
            name="name"
          />
          <Input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Sobrenome"
            name="lastName"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            name="password"
          />
          <Button type="submit">Registrar</Button>
          {error && <div className="text-red-500 mt-2 font-bold">{error}</div>}
          <Link href="/" className="text-neutral-500 text-base">
            Já tem uma conta? Entrar
          </Link>
        </form>
      </div>
    </>
  );
}
