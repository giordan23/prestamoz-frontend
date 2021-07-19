import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/perucash-logo-nuevo.png";
// import fbIcon from "../../assets/fb-icon.png";
// import googleIcon from "../../assets/google-icon.png";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";

export const LoginScreen = () => {
  
  document.title = "Iniciar Sesion";

const { register, handleSubmit, watch, formState : {errors} } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8 shadow-lg p-10 rounded-md border-1">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={imgLogo}
            alt="logo Perucash"
          />
          <h2 className="font-serif mt-4 text-center text-lg font-bold text-gray-700 p-2 md:text-2xl">
            BIENVENIDO
          </h2>
          <p className="font-medium text-indigo-400 hover:text-indigo-500 text-center md:text-md text-sm">
            Perucash - casa de prestamos y empeños
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register('lEmail')}
                name="lEmail"
                type="email"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="correo electronico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register('lPassword')}
                name="lPassword"
                type="password"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="block md:flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordarme
              </label>
            </div>

            <div className="block md:flex text-sm pt-3 md:p-1 text-center">
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ¿Olvido su contraseña?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Iniciar Sesion
            </button>
          </div>
          <div className="block md:flex text-sm pt-3 md:p-1 text-center">
            <Link
              to="/register"
              className="font-medium text-red-400 hover:text-indigo-500 text-center"
            >
              ¿Aun no tiene una cuenta? Registrarse
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
