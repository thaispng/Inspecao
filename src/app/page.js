"use client";

import { signIn } from "next-auth/react";
import Button from "@/components/_ui/Button/Button";
import Input from "@/components/_ui/Input/Input";
import Logo from "@/components/_ui/Logo/Logo";

export default function Login() {
  async function Entrar(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/home",
    });
  }

  return (
    <>
      <div className="inicial-screen flex justify-center items-center">
        <form
          onSubmit={Entrar}
          className=" bg-basic-branco w-[500px] h-[400px] flex flex-col justify-center items-center rounded shadow-m shadow-cinza-claro gap-4 p-8"
        >
          <div className="flex justify-center items-center gap-4">
            <Logo width={75} height={75}/>
          </div>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Senha" name="password" />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </>
  );
}
