import LoginForm from "@/components/LoginForm/page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function  Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");
  
  return (
    <div className="inicial-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
