// src/pages/Professors.jsx
import React, { useEffect, useState } from 'react';
import { getProfesores } from '../api/profesores';
import ListProfesores from '../components/ListProfesores';

const Profesores = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        const fetchProfesores = async () => {
            try {
                const data = await getProfesores();
                setProfesores(data);
            } catch (error) {
                console.error('Error al obtener los profesores:', error);
            }
        };

        fetchProfesores();
    }, []);

    return (
        <div>
            <h1>Página de Profesores</h1>
            <ListProfesores profesores={profesores} />
        </div>
    );
};

export default Profesores;
