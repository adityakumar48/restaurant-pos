import React from "react";

interface ItableProps {
  tableNumber: number;
  status: string;
}

const Table = ({ tableNumber, status }: ItableProps) => {
  return (
    <div
      className={`${
        status === "available" ? "bg-green-900" : "bg-gray-700"
      } text-white rounded p-4 text-center`}
    >
      <h3 className="text-3xl">{tableNumber}</h3>
      <span>{status}</span>
    </div>
  );
};

export default Table;
