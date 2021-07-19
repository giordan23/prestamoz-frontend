import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
// import { PrendarioUsuario } from './Prestamos/PrendarioUsuario'



export const PrestamosScreen = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className='md:flex justify-around items-center h-48'>
            <div className='flex'>
                <Link to={`${url}/prendario`} >Prestamos prendarios</Link>
            </div>
            <div className='flex'>
                Prestamos Vehiculares
            </div>
            <div className='flex'>
                Prestamos con Terrenos
            </div>
        </div>
    )
}
