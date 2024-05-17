"use client";

import React, { useState } from "react";
import Status from "../Status/Status";
import Button from "../Button/Button";
import ModalForm from "../ModalForm/ModalForm";
function Table() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    console.log("fechou");
  }
  const handleOpen = () => {
    setShowModal(true);
    console.log("abriu");
  }




  return (
    <table className=" table-fixed  border-separate border border-slate-200  flex flex-col w-full h-[500px] bg-gray-100 rounded p-2 shadow-sm ">
      <div className=" w-full flex justify-between items-center gap-8 p-1">
        <h3 className="font-medium text-2xl text-neutral-600">Inspeções</h3>
        <div className=" w-full flex justify-end ">
        <div className=" w-[150px] ">
          <Button onClick={handleOpen}> Nova inspeção</Button>
        </div>
      </div>
      </div>
      <hr className="my-2 bg-slate-50" />

      {showModal && (
        <ModalForm onClose={handleClose} /> 
      )}
      <thead className="w-full flex ">
        <tr className=" w-full text-neutral-500 flex flex-row gap-8 p-1">
          <th className="font-medium text-center w-[250px] ">Id</th>
          <th className="font-medium text-center w-[250px]">Obra</th>
          <th className="font-medium text-center w-[250px]">Data inícial</th>
          <th className="font-medium text-center w-[250px]">Data final</th>
          <th className="font-medium text-center w-[250px]">Status</th>
        </tr>
      </thead>
      <hr className="my-2 bg-slate-50" />
      <tbody className="w-full flex flex-col gap-3">
        <tr className="text-neutral-500 flex flex-row gap-8 w-full ">
          <td className="font-medium text-center w-[250px] ">01</td>
          <td className="font-medium text-center w-[250px] ">
            Edifício Port fail
          </td>
          <td className="font-medium text-center w-[250px] ">22-10-2024</td>
          <td className="font-medium text-center w-[250px] ">22-10-2024</td>
          <Status
            backgroundColor="bg-yellow-100"
            status="Em andamento"
            textColor="text-yellow-500"
          />
        </tr>
        <tr className="text-neutral-500 flex flex-row gap-8 w-full">
          <td className="font-medium text-center w-[250px] ">01</td>
          <td className="font-medium text-center w-[250px] ">
            Edifício Port fail
          </td>
          <td className="font-medium text-center w-[250px] ">22-10-2024</td>
          <td className="font-medium text-center w-[250px] ">22-10-2024</td>
          <Status
            backgroundColor="bg-green-100"
            status="Concluída"
            textColor="text-green-500"
          />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
