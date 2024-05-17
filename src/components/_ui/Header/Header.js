import Link from "next/link";
import Logo from "@/components/_ui/Logo/Logo";
export default function Header() {
  return (
    <header
      className="flex justify-between items-center p-4 bg-transparent text-white
    shadow-md
    gap-4
    "
    >
      <Logo width={40} height={50}
      />
      <div className="flex gap-4">
        {/* <Link className=" text-black" href="/home" >
          Inicial
        </Link>
        <Link className=" text-black" href="/form">
          Formulário
        </Link> */}
      </div>
    </header>
  );
}
