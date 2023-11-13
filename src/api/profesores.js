// src/api/profesores.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_HOST;

export const getProfesores = async () => {
    try {
        const response = await axios.get(`${baseURL}/profesores`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
