import axios from "axios";

const congressProcedingApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/congressProcedings/",
});

export const getAllCongressProcedings = () => congressProcedingApi.get("/");

export const getCongressProceding = (id) => congressProcedingApi.get(`/${id}/`);

export const createCongressProceding = (congressProceding) =>
  congressProcedingApi.post("/", congressProceding);

export const deleteCongressProceding = (id) =>
  congressProcedingApi.delete(`/${id}/`);

export const updateCongressProceding = (id, congressProceding) =>
  congressProcedingApi.put(`/${id}/`, congressProceding);
