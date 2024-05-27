import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function ModalForm({ onClose, onSave, inspection }) {
  const [nameConstructions, setNameConstructions] = useState(inspection?.nameConstructions ?? '');
  const [addressConstructions, setAddressConstructions] = useState(inspection?.addressConstructions ?? '');
  const [inicialDate, setInicialDate] = useState(inspection?.inicialDate ?? '');
  const [finalDate, setFinalDate] = useState(inspection?.finalDate ?? '');
  const [status, setStatus] = useState(inspection?.status ?? '');
  const [description, setDescription] = useState(inspection?.description ?? '');
  const [cep, setCep] = useState(inspection?.cep ?? '');
  const [neighborhood, setNeighborhood] = useState(inspection?.neighborhood ?? '');
  const [city, setCity] = useState(inspection?.city ?? '');
  const [number, setNumber] = useState(inspection?.number ?? '');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!nameConstructions || !addressConstructions || !inicialDate || !finalDate || !status || !description || !cep || !neighborhood || !city || !number){
      alert('Preencha todos os campos para continuar.')
      return;
    }

    const newInspection = {
      nameConstructions,
      addressConstructions,
      inicialDate,
      finalDate,
      status,
      description,
      cep,
      neighborhood,
      city,
      number
    };

    try{
      if (inspection) {
        newInspection.id = inspection._id;
      }
      const res = await fetch('/api/Form', {
        method: inspection ? 'PUT' : 'POST',
        body: JSON.stringify(newInspection),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(res.status === 200 || res.status === 201){
        alert('Informações da obra salvas')
        onSave(newInspection)
        onClose()
       router.push('/home')
      }
    } catch (error) {
      alert('Erro ao criar inspeção da obra.')
      console.error(error);
    }
  };
  return (
    <>
      <div
        id="meuModal"
        className="fixed inset-0 z-10 flex items-center justify-center w-full h-full pb-20 overflow-auto transition transform bg-gray-500 bg-opacity-50 "
      >
        <div className="my-6 mx-auto p-4 bg-white shadow-md w-[900px] rounded-md">
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold text-neutral-700">
                Nova inspeção
              </h2>
              <span
                onClick={onClose}
                className="font-bold cursor-pointer text-neutral-900"
              >
                X
              </span>
            </div>
            <p className="text-sm text-neutral-500">
              Preencha os campos abaixo para adicionar uma nova inspeção
            </p>
            <hr className="my-2" />
            <form onSubmit={handleSubmit} >
              <div className="flex flex-col gap-4 p-2">
                <div className="flex flex-col">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Nome da Obra
                  </label>
                  <Input onChange={e => setNameConstructions(e.target.value)} value={nameConstructions} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-row gap-2">
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    CEP
                  </label>
                  <Input onChange={e => setCep(e.target.value)} value={cep} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Cidade
                  </label>
                  <Input onChange={e => setCity(e.target.value)} value={city} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Bairro
                  </label>
                  <Input onChange={e => setNeighborhood(e.target.value)} value={neighborhood} type="text" name="obra" id="obra" />
                </div>
                </div>
                <div className="flex flex-row gap-2">
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Endereço da obra
                  </label>
                  <Input onChange={e => setAddressConstructions(e.target.value)} value={addressConstructions} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Número
                  </label>
                  <Input onChange={e => setNumber(e.target.value)} value={number} type="text" name="obra" id="obra" />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <div className="flex flex-col w-full">
                    <label
                      for="obra"
                      className="text-sm font-semibold text-neutral-500 "
                    >
                      Data inícial
                    </label>
                    <Input onChange={e => setInicialDate(e.target.value)} value={inicialDate}  type="date" name="obra" id="obra" />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      for="obra"
                      className="text-sm font-semibold text-neutral-500"
                    >
                      Data final
                    </label>
                    <Input onChange={e => setFinalDate(e.target.value)} value={finalDate} type="date" name="obra" id="obra" />
                  </div>
                  
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500 "
                  >
                    Status
                  </label>
                  <select
                    onChange={e => setStatus(e.target.value)}
                    name="status"
                    id="status"
                    className="w-full px-2 py-1 text-base font-medium border-2 rounded appearance-none border-basic-cinza-medio focus:outline-none focus:border-laranja-laranja-primary text-basic-preto"
                  >
                    <option value="" >Selecione</option>
                    <option value="Em andamento" selected={status === "Em andamento"}>Em andamento</option>
                    <option value="Concluida" selected={status === "Concluida"}>Concluído</option>
                    <option value="Pendente" selected={status === "Pendente"}>Pendente</option>
                    <option value="Cancelada" selected={status === "Cancelada"}>Cancelada</option>
                  </select>
                </div>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Descrição
                  </label>
                  <textarea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    name="descricao"
                    id="descricao"
                    className="h-24 p-2 text-base font-medium border-2 rounded appearance-none resize-none border-slate-200 focus:outline-none focus:border-laranja-laranja-primary text-basic-preto"
                  ></textarea>
                </div>
              <div className="flex justify-end gap-4 ">
                <Button backgroundColor="bg-neutral-100 text-neutral-500 rounded-md hover:text-[#fff]" onClick={onClose}>Cancelar</Button>
                <Button rounded="rounded-md"  type="submit" >Salvar</Button>
              </div>
              </div>
            </form>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}