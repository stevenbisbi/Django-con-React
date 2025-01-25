import axios from "axios";

const congressProceedingApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/congress_proceedings/",
});

export const getAllCongressProceedings = () => congressProceedingApi.get("/");

export const getCongressProceeding = (id) =>
  congressProceedingApi.get(`/${id}/`);

export const createCongressProceeding = (congressProceeding) =>
  congressProceedingApi.post("/", congressProceeding);

export const deleteCongressProceeding = (id) =>
  congressProceedingApi.delete(`/${id}/`);

export const updateCongressProceeding = (id, congressProceeding) =>
  congressProceedingApi.put(`/${id}/`, congressProceeding);
