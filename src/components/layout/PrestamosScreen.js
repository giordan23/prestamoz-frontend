import React from 'react'
import { MyModal } from './Prestamos/PrendarioUsuario'

export const PrestamosScreen = () => {
    return (
        <div className='md:flex'>
            <div>
                <MyModal></MyModal>
                <p>Prestamos prendarios</p>
            </div>
            <div>
                Prestamos Vehiculares
            </div>
            <div>
                Prestamos con Terrenos
            </div>
        </div>
    )
}
