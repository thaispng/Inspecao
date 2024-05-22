"use client"
import Button from "../_ui/Button/Button"
import Input from "../_ui/Input/Input"
import Logo from "../_ui/Logo/Logo"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
    
          if (res.error) {
            setError("Invalid Credentials");
            return;
          }
    
          router.replace("/home");
        } catch (error) {
          console.log(error);
        }
      };


    return(
        <div className="inicial-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-basic-branco w-[500px] h-[auto] flex flex-col justify-center items-center rounded shadow-m shadow-cinza-claro gap-4 p-8"
      >
        <div className="flex justify-center items-center gap-4">
          <Logo width={75} height={75}/>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-2xl text-neutral-900 w-full flex">Entrar</h1>
          <p className="text-neutral-500 text-base flex w-full">
            Faça login para continuar
          </p>
        </div>
        <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" name="email" />
        <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" name="password" />
        <Button type="submit">Entrar</Button>
        {error && (
          <div className="text-red-500 mt-2 font-bold">
            {error}
          </div>
        )}
        <Link className="text-neutral-500 text-base" href='/register'>
          Ainda não tem uma conta? Registre-se
        </Link>
      </form>
    </div>
    )
}