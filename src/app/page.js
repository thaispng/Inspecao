import Button from "@/components/_ui/Button/Button";
import Input from "@/components/_ui/Input/Input";
import Logo from "@/components/_ui/Logo/Logo";

export default function Home() {
  return (
   <>
   <div className='inicial-screen flex justify-center items-center'>
    <div className='bg-branco w-[500px] h-[400px] flex flex-col justify-center items-center rounded shadow-m shadow-cinza-claro gap-4 p-8'> 
    <div className='flex justify-center items-center gap-4'>
      <Logo />
    </div>
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Senha' />
      <Button>Entrar</Button>
      </div>
    </div>
   </>
  );
}
