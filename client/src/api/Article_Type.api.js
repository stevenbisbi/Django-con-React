import axios from "axios";

const tipoApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/article_types/",
});

export const getAllTipos = () => tipoApi.get("/");

export const getTipo = (id) => tipoApi.get(`/${id}/`);

export const createTipo = (tipo) => tipoApi.post("/", tipo);

export const deleteTipo = (id) => tipoApi.delete(`/${id}/`);

export const updateTipo = (id, tipo) => tipoApi.put(`/${id}/`, tipo);
