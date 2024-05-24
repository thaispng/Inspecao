import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function ModalForm({ onClose, onSave }) {
  const [nameConstructions, setNameConstructions] = useState('');
  const [addressConstructions, setAddressConstructions] = useState('');
  const [inicialDate, setInicialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');

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
      const res = await fetch('/api/Form', {
        method: 'POST',
        body: JSON.stringify(newInspection),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(res.status === 201){
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
        className="flex w-full h-full items-center justify-center fixed  inset-0 overflow-auto pb-20 bg-gray-500 bg-opacity-50 transition transform  "
      >
        <div className="my-6 mx-auto p-4 bg-white shadow-md w-[900px] rounded-md">
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold text-neutral-700">
                Nova inspeção
              </h2>
              <span
                onClick={onClose}
                className="text-neutral-900 cursor-pointer font-bold"
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
                  <Input onChange={e => setNameConstructions(e.target.value)}  type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-row gap-2">
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    CEP
                  </label>
                  <Input onChange={e => setCep(e.target.value)} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Cidade
                  </label>
                  <Input onChange={e => setCity(e.target.value)} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Bairro
                  </label>
                  <Input onChange={e => setNeighborhood(e.target.value)} type="text" name="obra" id="obra" />
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
                  <Input onChange={e => setAddressConstructions(e.target.value)} type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Número
                  </label>
                  <Input onChange={e => setNumber(e.target.value)} type="text" name="obra" id="obra" />
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
                    <Input onChange={e => setInicialDate(e.target.value)}  type="date" name="obra" id="obra" />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      for="obra"
                      className="text-sm font-semibold text-neutral-500"
                    >
                      Data final
                    </label>
                    <Input onChange={e => setFinalDate(e.target.value)} type="date" name="obra" id="obra" />
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
                    className="border-basic-cinza-medio
                    appearance-none
                    rounded 
                    px-2 
                    py-1 
                    border-2
                    w-full 
                    focus:outline-none 
                    focus:border-laranja-laranja-primary
                    text-basic-preto
                    font-medium 
                    text-base"
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Concluida">Concluído</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Cancelada">Cancelada</option>
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
                    name="descricao"
                    id="descricao"
                    className=" appearance-none  border-slate-200 rounded p-2 resize-none h-24 focus:outline-none border-2  focus:border-laranja-laranja-primary
                    text-basic-preto
                    font-medium 
                    text-base "
                  ></textarea>
                </div>
              <div className="flex justify-end gap-4 ">
                <Button onClick={onClose}>Cancelar</Button>
                <Button  type="submit" >Salvar</Button>
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