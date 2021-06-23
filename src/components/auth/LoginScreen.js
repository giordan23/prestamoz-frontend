import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/perucash-logo-nuevo.png";
import fbIcon from "../../assets/fb-icon.png";
import googleIcon from "../../assets/google-icon.png";

export const LoginScreen = () => {
  document.title = "Iniciar Sesion";
  
  return (
    <div className='w-100 pt-5 auth_bg'>

      <div className="container w-75 rounded shadow">
        <div className="row align-items-stretch">
          <div className="col auth__img d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
              <img src={imgLogo} alt="perucash prestamos logo" width="100" />
            </div>
            <h2 className="fw-bold text-center py-5">Bienvenido</h2>

            {/* Login */}
            <form action="#">
              <div className="mb-4">
                <label htmlFor="email" className="for-label">
                  Email
                </label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="for-label">
                  Password
                </label>
                <input type="password" className="form-control" name="password" />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="connected"
                />
                <label htmlFor="connected" className="form-check-label mx-2">
                  Mantenerme conectado
                </label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn-primary">
                  Iniciar Sesion
                </button>
              </div>
              
            </form>

            {/* Login con Redes Sociales */}

            <div className="container w-100 my-5">
              <div className="row text-center">
                <div className="col-12 fw-bold">Iniciar Sesion con Redes Sociales</div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-outline-primary w-100 my-1">
                      <div className="row align-items-center">
                        <div className="col-2 d-none d-md-block">
                          <img src={fbIcon} alt="fb-icon" width="32" />
                        </div>
                        <div className="col-12 col-md-10 text-center">
                          Facebook
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-outline-danger w-100 my-1">
                      <div className="row align-items-center">
                        <div className="col-2 d-none d-md-block">
                          <img src={googleIcon} alt="fb-icon" width="32" />
                        </div>
                        <div className="col-12 col-md-10 text-center">Google</div>
                      </div>
                    </button>
                  </div>
                  <div className="my-3">
                <span>
                  Olvidó su password?
                  <Link to="/forgot-password" className='auth__link'> Recuperar acceso</Link>
                </span>
                <br></br>
                <span>
                  No tienes cuenta?
                  <Link to="/register" className='auth__link'> Registrate</Link>
                </span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
