import React from "react";

export const DashboardScreen = () => {
  return (
    <div className="flex items-center h-48 justify-center">
      <h1 className="text-center text-2xl font-bold">Dashboard</h1>
      <div className='flex'>
        <div className="flex">Total de dinero en caja Now: </div>
        <div className="flex">Total de Dinero Prestado:</div>
      </div>
      <div className='flex'>
        <div className="flex">Prestamos vencidos: </div>
        <div className="flex">Dinero en bancos: </div>
      </div>
    </div>
  );
};
