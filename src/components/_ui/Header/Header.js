import Logo from "@/components/_ui/Logo/Logo";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';
import Avatar from '@/components/_ui/Avatar/Avatar';
import ModalExit from '@/components/_ui/ModalExit/ModalExit';

export default function Header() {
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <header className="relative flex justify-between items-center p-2 bg-[#fff] text-white shadow-sm gap-4">
      <Logo width={40} height={50} />
      <div className="flex gap-4 items-center">
        <div className="flex flex-row items-center px-4 gap-2">
          <Avatar name={session?.user?.name} />
          <h4 className="text-md text-neutral-900 px-2 font-medium ">{session?.user?.name}</h4>
          <button onClick={toggleModal}>
            <ChevronDown size={20} color="#000" />
          </button>
        </div>
      </div>
      {isModalVisible && (
        <div ref={modalRef} className="absolute top-full mt-2 right-0">
          <ModalExit />
        </div>
      )}
    </header>
  );
}
