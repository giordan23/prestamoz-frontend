import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../../actions/ui";
import { useForm } from "react-hook-form";
import AddProduct from "./Modal/AddProduct";
import { Products } from "./Forms/Products";

export const PrendarioUsuario = () => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(uiOpenModal());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('dentro de Prendario'+data);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="md:grid md:grid-cols-1 md:gap-6 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 font-semibold bg-indigo-500 py-2 outline-red">
              <h1 className="text-xl text-white">
                Registrar prestamo prendario
              </h1>
            </div>
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-9 gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="cDni"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DNI
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      autoFocus
                      {...register("cDni", {
                        minLength: {
                          value: 8,
                          message: "solo numeros de 8 digitos",
                        },
                        maxLength: {
                          value: 8,
                          message: "solo numeros de 8 digitos",
                        },
                        required: "Requerido",
                        pattern: {
                          value: "^[0-9]+$",
                          message: "DNI invalido",
                        },
                      })}
                      autoComplete="off"
                      type="number"
                      name="cDni"
                      id="cDni"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded sm:text-sm border-gray-300"
                      placeholder="72235379"
                    />
                  </div>
                  {errors.cDni && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cDni.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="cName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombres
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      {...register("cName", { required: "Requerido" })}
                      type="text"
                      name="cName"
                      id="cName"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded sm:text-sm border-gray-300"
                      autoComplete="off"
                      placeholder="Giordan Neil Amstrong"
                    />
                  </div>
                  {errors.cName && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cName.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="cLastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      {...register("cLastName", { required: "Requerido" })}
                      type="text"
                      name="cLastName"
                      id="cLastName"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded sm:text-sm border-gray-300"
                      autoComplete="off"
                      placeholder="Manrique Mendoza Bhor"
                    />
                  </div>
                  {errors.cLastName && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cLastName.message}
                    </div>
                  )}
                </div>

                {/* Domiciolio y telf */}

                <div className="sm:col-span-4">
                  <label
                    htmlFor="cAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domicilio
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      {...register("cAddress", { required: "Requerido" })}
                      type="text"
                      name="cAddress"
                      id="cAddress"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded sm:text-sm border-gray-300"
                      autoComplete="off"
                      placeholder="Jr. Las retamaos 557 Mz. A Lt. B S-201"
                    />
                  </div>
                  {errors.cAddress && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cAddress.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="cPhone1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefono 1
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      {...register("cPhone1", {
                        minLength: {
                          value: 9,
                          message: "solo numeros de 9 digitos",
                        },
                        maxLength: {
                          value: 9,
                          message: "solo numeros de 9 digitos",
                        },
                        required: "Requerido",
                        pattern: {
                          value: "^[0-9]+$",
                          message: "numero invalido",
                        },
                      })}
                      type="number"
                      name="cPhone1"
                      id="cPhone1"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded sm:text-sm border-gray-300"
                      autoComplete="off"
                      placeholder="986986403"
                    />
                  </div>
                  {errors.cPhone1 && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cPhone1.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="cPhone2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefono 2
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      {...register("cPhone2", {
                        minLength: {
                          value: 9,
                          message: "solo numeros de 9 digitos",
                        },
                        maxLength: {
                          value: 9,
                          message: "solo numeros de 9 digitos",
                        },
                        required: "Requerido",
                        pattern: {
                          value: "^[0-9]+$",
                          message: "numero invalido",
                        },
                      })}
                      type="number"
                      name="cPhone2"
                      id="cPhone2"
                      className="focus:ring-indigo-500  focus:border-indigo-500  block w-full rounded sm:text-sm border-gray-300"
                      placeholder="986986403"
                      autoComplete="off"
                    />
                  </div>
                  {errors.cPhone2 && (
                    <div className="block text-sm font-medium text-red-500 px-1">
                      {errors.cPhone2.message}
                    </div>
                  )}
                </div>
              </div>
              {/* CRUD Productos */}

              <div className="block">
                <label className="block text-sm font-medium text-gray-700 py-3">
                  Productos a empeñar
                </label>
                {<Products />}
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className="text-sm text-gray-600"
                    onClick={handleAddProduct}
                  >
                    <label
                      htmlFor="file-upload"
                      className="relative text-center justify-center cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      Agregar producto
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline- justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
                      <AddProduct />
      </div>
    </div>
  );
};
