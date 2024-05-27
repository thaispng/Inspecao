import { useEffect, useRef } from 'react';
import { Pencil, Trash } from 'lucide-react';

export default function ModalEdit({ inspection, onClose, onDelete, onEdit }) {
    const modalRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleDelete = () => {
        onDelete(inspection._id);
        onClose();
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    return(
        <div ref={modalRef} className="flex flex-col items-center p-2 gap-4 bg-[#fff] shadow-md w-[150px] h-auto rounded-md">
            <button className='flex flex-row justify-between items-center w-[100px] text-neutral-300' onClick={handleDelete}>
                <Trash color='#d4d4d4' />
                Deletar
            </button>
            <button className='flex flex-row justify-between items-center w-[100px] text-neutral-300' onClick={() => {onEdit(inspection); onClose()}}>
                <Pencil />
                Editar
            </button>
        </div>
    );
}