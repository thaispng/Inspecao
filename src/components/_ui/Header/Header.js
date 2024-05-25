
import Logo from "@/components/_ui/Logo/Logo";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header
      className="flex justify-between items-center p-2 bg-[#fff] text-white
    shadow-lg
    gap-4
    "
    >
      <Logo width={40} height={50}
      />
      <div className="flex gap-4">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-neutral-900 text-white px-4 py-2 rounded"
        >
          Sair
        </button>
      <h3 className="text-2xl text-neutral-900 w-full flex">Olá, {session?.user?.name}</h3>
      </div>
    </header>
  );
}
