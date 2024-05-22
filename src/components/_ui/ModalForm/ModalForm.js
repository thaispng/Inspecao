import Button from "../Button/Button";
import Input from "../Input/Input";

export default function ModalForm({ onClose }) {
  return (
    <>
      <div
        id="meuModal"
        className="flex w-full h-full items-center justify-center fixed  inset-0 overflow-auto pb-20 bg-gray-500 bg-opacity-50 transition transform  "
      >
        <div className="my-6 mx-auto p-4 bg-white shadow-md w-[550px] rounded-md">
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
            <form >
              <div className="flex flex-col gap-4 p-2">
                <div className="flex flex-col">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Nome da Obra
                  </label>
                  <Input type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-col">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Endereço da obra
                  </label>
                  <Input type="text" name="obra" id="obra" />
                </div>
                <div className="flex flex-row w-full justify-between ">
                  <div>
                    <label
                      for="obra"
                      className="text-sm font-semibold text-neutral-500 "
                    >
                      Data inícial
                    </label>
                    <Input type="date" name="obra" id="obra" />
                  </div>
                  <div>
                    <label
                      for="obra"
                      className="text-sm font-semibold text-neutral-500"
                    >
                      Data final
                    </label>
                    <Input type="date" name="obra" id="obra" />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500 "
                  >
                    Status
                  </label>
                  <select
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
                    <option value="Selecione">Selecione</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Concluído">Concluído</option>
                    <option value="Pendente">Pendente</option>
                  </select>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    for="obra"
                    className="text-sm font-semibold text-neutral-500"
                  >
                    Descrição
                  </label>
                  <textarea
                    name="descricao"
                    id="descricao"
                    className=" appearance-none  border-slate-200 rounded p-2 resize-none h-48 focus:outline-none border-2  focus:border-laranja-laranja-primary
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