import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const MyModal = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Registrar Prestamo
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Registrar Prestamo
                </Dialog.Title>

                {/* Form para registrar */}

                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                              <div className="col-span-4 sm:col-span-1">
                                <label
                                  htmlFor="dni"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  DNI
                                </label>
                                <input
                                  type="text"
                                  name="dni"
                                  id="dni"
                                  autocomplete="given-name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                              <div className="col-span-4 sm:col-span-2">
                                <label
                                  htmlFor="first_name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Nombres
                                </label>
                                <input
                                  type="text"
                                  name="first_name"
                                  id="first_name"
                                  autocomplete="given-name"
                                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-4 sm:col-span-3">
                                <label
                                  htmlFor="last_name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Apellidos
                                </label>
                                <input
                                  type="text"
                                  name="last_name"
                                  id="last_name"
                                  autoComplete="family-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="email_address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Direccion
                                </label>
                                <input
                                  type="text"
                                  name="email_address"
                                  id="email_address"
                                  autoComplete="email"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Provincia / Distrito
                                </label>
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>San Cristobal</option>
                                  <option>Asencion</option>
                                  <option>Huancavelica</option>
                                </select>
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="street_address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Street address
                                </label>
                                <input
                                  type="text"
                                  name="street_address"
                                  id="street_address"
                                  autoComplete="street-address"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  htmlFor="city"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="state"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  State / Province
                                </label>
                                <input
                                  type="text"
                                  name="state"
                                  id="state"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="postal_code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  ZIP / Postal
                                </label>
                                <input
                                  type="text"
                                  name="postal_code"
                                  id="postal_code"
                                  autoComplete="postal-code"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
