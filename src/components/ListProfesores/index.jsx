// src/components/ListProfessors.js
import React from 'react';

const ListProfesores = ({ profesores }) => {
    return (
        <div>
            <h1>Lista de Profesores</h1>
            <ul>
                {profesores.map((profesor) => (
                    <li key={profesor.id}>{profesor.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListProfesores;
