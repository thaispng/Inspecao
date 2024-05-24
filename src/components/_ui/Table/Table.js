"use client";

import React, { useEffect, useState } from "react";
import Status from "../Status/Status";
import Button from "../Button/Button";
import ModalForm from "../ModalForm/ModalForm";
function Table() {
  const [inspections, setInspections] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }
  const handleOpen = () => {
    setShowModal(true);
  }

  const addInspection = (newInspection) => {
    setInspections([...inspections, newInspection]);
  };


  useEffect(() => {
    const fetchInspections = async () => {
      try {
        const response = await fetch("/api/Form", {
          cache: "no-cache",
        })
        console.log("response", response)
        const data = await response.json();
        console.log("data", data)
        if (Array.isArray(data.forms)) {
          setInspections(data.forms);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchInspections();
  }, []);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("pt-BR");
  }

  console.log("alo ", inspections);
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
        <ModalForm onClose={handleClose}
        onSave={addInspection}
        /> 
      )}
      <thead className="w-full flex ">
        <tr className=" w-full text-neutral-500 flex flex-row gap-8 p-1">
          <th className="font-medium text-center w-[250px]">Obra</th>
          <th className="font-medium text-center w-[250px]">Data inícial</th>
          <th className="font-medium text-center w-[250px]">Data final</th>
          <th className="font-medium text-center w-[250px]">Status</th>
          
        </tr>
      </thead>
      <hr className="my-2 bg-slate-50" />
      <tbody className="w-full flex flex-col gap-3">
        {inspections.map((inspection, index) => (
          <tr key={index} className="text-neutral-500 flex flex-row gap-8 w-full">
            <td className="font-medium text-center w-[250px]">{inspection.nameConstructions}</td>
            <td className="font-medium text-center w-[250px]">{formatDate(inspection.inicialDate)}</td>
            <td className="font-medium text-center w-[250px]">{formatDate(inspection.finalDate)}</td>
            <Status
              backgroundColor={inspection.status === "Em andamento" ? "bg-yellow-100" : "bg-green-100"}
              status={inspection.status}
              textColor={inspection.status === "Em andamento" ? "text-yellow-500" : "text-green-500"}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
