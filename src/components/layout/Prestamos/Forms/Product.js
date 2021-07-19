import React from "react";
import { useDispatch } from "react-redux";
import { clearActive, deleteLoan, setActiveLoan } from "../../../../actions/loans";
import { uiOpenModal } from "../../../../actions/ui";


export const Product = ( {product} ) => {

  const dispatch = useDispatch();

  const handleEdit = (e, product) => {
    e.preventDefault();
    dispatch(setActiveLoan(product));
    dispatch(uiOpenModal());
  }
  const handleDelete = (e, product) => {
    e.preventDefault();
    dispatch(setActiveLoan(product));
    dispatch(deleteLoan());
    dispatch(clearActive());
  }
  
  return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">
              {product.tipo}
            </div>
          </td>
          <td className="px-7 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.qty}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.capital}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {`${product.interes}%`} 
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
            <button onClick={(e) => handleEdit(e, product)} className="pr-2 text-yellow-600 hover:text-yellow-700">
              Editar
            </button>
            <button onClick={(e) => handleDelete(e, product)} className="pl-2 text-red-600 hover:text-red-900">
            {` `}Eliminar
            </button>
          </td>
        </tr>
  );
};
