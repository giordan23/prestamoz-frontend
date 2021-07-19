import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useRef } from "react";
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewLoan, clearActive, editLoan } from "../../../../actions/loans";
import { uiCloseModal } from "../../../../actions/ui";
import loanReducer from "../../../../reducers/loanReducer";

export default function MyModal() {

  const { openModal } = useSelector((state) => state.ui);
  const { activeLoan, loans } = useSelector((state) => state.loans);

  //hooks

  useEffect(() => {
    if (activeLoan){
      setValue('qty', activeLoan.qty)
      setValue('capital', activeLoan.capital)
      setValue('interes', activeLoan.interes)
      setValue('tipo', activeLoan.tipo)
      setValue('marca', activeLoan.marca)
      setValue('modelo', activeLoan.modelo)
      setValue('observacion', activeLoan.observacion)
    } else {
      setValue('qty', '')
      setValue('capital', '')
      setValue('interes', 4)
      setValue('tipo', '')
      setValue('marca', '')
      setValue('modelo', '')
      setValue('observacion', '')
    }
  
  }, [activeLoan])

  const dispatch = useDispatch();
  function closeModal() {
    dispatch(uiCloseModal());
    if (activeLoan){
      dispatch(clearActive());
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmitProduct = (loan) => {
    
    if (activeLoan) {

      loan.id = activeLoan.id;
      console.log(editLoan(loan));
      dispatch(editLoan(loan))
      dispatch(uiCloseModal());
      dispatch(clearActive());

    }

    if (!activeLoan) {
      loan.id = loans.length+1;
      console.log(loan.id);
      dispatch(addNewLoan(loan));
      dispatch(uiCloseModal());
      dispatch(clearActive());
    }

  };

  return (
    // console.log(modalOpen);

    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-transparent bg-gray-200 bg-opacity-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium  text-gray-900 my-4 bg-indigo-300 rounded p-1"
                >
                  Añadir Producto
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmitProduct)}  >
                  <div className="grid grid-cols-3 gap-6 pb-4">
                    <div className="col-span-3 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="qty"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cantidad
                      </label>
                      <input
                        autoFocus
                        {...register("qty", {
                          pattern: {
                            value: "[0-9]",
                            message: "valor no valido",
                          },
                          max: {
                            value: 100,
                            message: "maximo 100 unidades",
                          },
                          min: {
                            value: 1,
                            message: "cantidad minima 1",
                          },
                          required: "Requerido",
                        })}
                        type="number"
                        name="qty"
                        autoComplete="off"
                        id="qty"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="01"
                      />
                      {errors.qty && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.qty.message}
                        </div>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="capital"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Capital (S/.)
                      </label>
                      <input
                        {...register("capital", {
                          pattern: {
                            value: "[0-9]",
                            message: "valor no valido",
                          },
                          max: {
                            value: 10000,
                            message: "maximo 10k soles",
                          },
                          min: {
                            value: 10,
                            message: "cantidad minima 10",
                          },
                          required: "Requerido",
                        })}
                        type="number"
                        name="capital"
                        placeholder="150.00"
                        autoComplete="off"
                        id="capital"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.capital && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.capital.message}
                        </div>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="interes"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {`Interes Semanal (%)`}
                      </label>
                      <input
                        {...register("interes", {
                          pattern: {
                            value: "[0-9]",
                            message: "valor no valido",
                          },
                          max: {
                            value: 10,
                            message: "maximo 10% semanal",
                          },
                          min: {
                            value: 1,
                            message: "minimo 1% semanal",
                          },
                          required: "Requerido",
                        })}
                        type="number"
                        name="interes"
                        id="interes"
                        autoComplete="off"
                        defaultValue={`4`}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.interes && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.interes.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-3 gap-6 py-4">
                    <div className="col-span-3 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="tipo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tipo
                      </label>
                      <input
                        {...register("tipo", { required: "Requerido" })}
                        type="text"
                        name="tipo"
                        autoComplete="off"
                        id="tipo"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Lavadora"
                      />
                      {errors.tipo && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.tipo.message}
                        </div>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="marca"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Marca
                      </label>
                      <input
                        {...register("marca", {
                          required: "Requerido",
                        })}
                        type="text"
                        name="marca"
                        placeholder="LG"
                        autoComplete="off"
                        id="marca"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.marca && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.marca.message}
                        </div>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="modelo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Modelo/Caracteristicas
                      </label>
                      <input
                        {...register("modelo", {
                          required: "Requerido",
                        })}
                        type="text"
                        name="modelo"
                        id="modelo"
                        autoComplete="off"
                        placeholder="WT6BSH"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.modelo && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.modelo.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-3 gap-6 pt-2">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="observacion"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Observaciones
                      </label>
                      <input
                        {...register("observacion")}
                        type="text"
                        name="observacion"
                        id="observacion"
                        autoComplete="off"
                        placeholder="Tiene un golpe en el frente"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.observacion && (
                        <div className="block text-xs font-medium text-red-400 px-1">
                          {errors.observacion.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {!activeLoan ? 'Añadir Producto' : 'Editar'}
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
