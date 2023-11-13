// src/components/ListProfesores.jsx
import React from 'react';

const ListProfesores = ({ profesores }) => {
    return (
        <div>
            <h2>Lista de Profesores</h2>
            <ul>
                {profesores.map((profesor) => (
                    <li key={profesor.id}>
                        <strong>ID:</strong> {profesor.id} <br />
                        <strong>Nombre:</strong> {profesor.nombre} <br />
                        <strong>Apellido:</strong> {profesor.apellido} <br />
                        <strong>Email:</strong> {profesor.email} <br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListProfesores;
