import React from 'react'
import classes from "./Index.module.css";
const Index = () => {
    return (
        <div className={classes.textoInicial}>
            <h1>Administrador de Plazoletas de Comidas</h1>
            <p>Esta es una propuesta de Frontend en React para poder poner a disposición de los usuarios todas</p>
            <p>caracteristicas desarrolladas para la administracion y uso de una plazoleta de comida. Teniendo roles como</p>
            <p>Dueño, Administrador, Empleado y Cliente</p>
        </div>
    )
}

export default Index
