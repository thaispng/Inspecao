import { LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";

export default function ModalExit() {
  return (
    <div className="flex flex-col items-center p-2 gap-4 bg-[#fff] shadow-md w-[150px] h-auto rounded-md">
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className='flex flex-row justify-between items-center w-[100px] text-neutral-900'
      >
        <LogOut color='#d4d4d4' />
        Sair
      </button>
    </div>
  );
}
