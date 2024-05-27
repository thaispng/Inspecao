"use client";

import React, { useEffect, useState, useRef } from "react";
import Status from "../Status/Status";
import Button from "../Button/Button";
import ModalForm from "../ModalForm/ModalForm";
import ModalEdit from "../ModalEdit/ModalEdit";
import Input from "../Input/Input";
import { Ellipsis, ChevronLeft, ChevronRight } from "lucide-react";

function Table() {
  const [inspections, setInspections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedInspection, setSelectedInspection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [search, setSearch] = useState("");
  const itemsPerPage = 5;
  const editButtonRef = useRef(null);


 
  const handleClose = () => {
    setShowModal(false);
    setSelectedInspection(null);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
  };
  
const handleOnEdit = (inspectionToEdit) => {
  setSelectedInspection(inspectionToEdit);
  setShowModal(true);
}

  const handleEditOpen = (inspection, event) => {
    if (showEditModal && selectedInspection === inspection) {
      handleEditClose();
    } else {
      setSelectedInspection(inspection);
      const rect = event.currentTarget.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setShowEditModal(true);
    }
  };

  const addInspection = (newInspection) => {
    setInspections([...inspections, newInspection]);
  };

  const deleteInspection = async (inspectionId) => {
    try {
      const response = await fetch(`/api/Form?id=${inspectionId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setInspections(
          inspections.filter((inspection) => inspection._id !== inspectionId)
        );
      } else {
        const errorData = await response.json();
        console.error("Failed to delete inspection:", errorData.message);
        alert("Failed to delete inspection: " + errorData.message);
      }
    } catch (error) {
      console.error("Error deleting inspection:", error);
      alert("Error deleting inspection: " + error.message);
    }
  };

  useEffect(() => {
    const fetchInspections = async () => {
      try {
        const response = await fetch("/api/Form", {
          cache: "no-cache",
        });
        const data = await response.json();
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
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredInspections = inspections.filter((inspection) =>
    inspection.nameConstructions.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedInspections = filteredInspections.slice(startIndex, endIndex);
  const totalPages =  Math.ceil(filteredInspections.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  

  return (
    <>
      <table className="table-fixed border-separate border bg-[#fff] border-slate-200 flex flex-col w-full h-[auto] items-center rounded p-2 shadow-sm">
        <div className="flex items-center justify-between w-full gap-8 p-1">
          <h3 className="text-2xl font-medium text-neutral-600">Inspeções</h3>
          </div>
          <div className="flex items-center justify-between w-full my-1">
            <div className="w-[300px]">
              <Input placeholder="Pesquisar" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="w-[150px]">
              <Button rounded="rounded" width="w-full" onClick={handleOpen}>
                Nova inspeção
              </Button>
            </div>
        </div>
        <hr className="my-2 bg-slate-50" />

        {showModal && (
          <ModalForm onClose={handleClose} onSave={addInspection} inspection={selectedInspection} />
        )}
        <thead className="flex w-full">
          <tr className="flex flex-row items-center w-full gap-8 p-1 text-neutral-500">
            <th className="font-medium text-base text-center w-[250px]">
              Data inícial
            </th>
            <th className="font-medium text-base text-center w-[250px]">
              Data final
            </th>
            <th className="font-medium text-base text-center w-[250px]">
              Obra
            </th>
            <th className="font-medium text-base text-center w-[250px]">
              Cidade
            </th>
            <th className="font-medium text-base text-center w-[250px]">
              Bairro
            </th>
            <th className="font-medium text-base text-center w-[250px]">
              Status
            </th>
            <th className="font-medium text-base text-center w-[250px]"></th>
          </tr>
        </thead>
        <hr className="my-2 bg-slate-50" />
        <tbody className="flex flex-col w-full gap-6">
          {paginatedInspections.map((inspection, index) => (
            <tr
              key={index}
              className="flex flex-row items-center w-full gap-8 text-neutral-500"
            >
              <td className="font-medium text-sm text-center w-[250px]">
                {formatDate(inspection.inicialDate)}
              </td>
              <td className="font-medium text-sm text-center w-[250px]">
                {formatDate(inspection.finalDate)}
              </td>
              <td className="font-medium text-sm text-center w-[250px]">
                {inspection.nameConstructions}
              </td>
              <td className="font-medium text-sm text-center w-[250px]">
                {inspection.city}
              </td>
              <td className="font-medium text-sm text-center w-[250px]">
                {inspection.neighborhood}
              </td>
              <Status status={inspection.status} />
              <td className="font-medium text-sm text-center w-[250px] relative z-0">
                <button
                  ref={editButtonRef}
                  className="p-1 rounded-sm text-neutral-500 bg-neutral-100"
                  onClick={(event) => handleEditOpen(inspection, event)}
                >
                  <Ellipsis size={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <div className="flex justify-center w-full gap-2 p-2">
          <button
            className="p-2 rounded-md text-neutral-500 bg-neutral-100"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`bg-neutral-100 px-4 py-2 text-sm text-neutral-500 rounded-md ${
                currentPage === number ? "bg-zinc-300" : ""
              }`}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="p-2 rounded-md text-neutral-500 bg-neutral-100"
            onClick={handleNextPage}
            disabled={endIndex >= inspections.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </table>

      {showEditModal && (
        <div
          className="absolute"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
        >
          <ModalEdit
            inspection={selectedInspection}
            onClose={handleEditClose}
            onDelete={deleteInspection}
            onEdit={handleOnEdit}
          />
        </div>
      )}
    </>
  );
}

export default Table;
