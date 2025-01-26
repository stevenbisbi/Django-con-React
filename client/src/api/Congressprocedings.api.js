import axios from "axios";

const congress_proceedingApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/congress_proceedings/",
});

export const getAllCongress_proceedings = () => congress_proceedingApi.get("/");

export const getCongress_proceeding = (id) =>
  congress_proceedingApi.get(`/${id}/`);

export const createCongress_proceeding = (congress_proceeding) =>
  congress_proceedingApi.post("/", congress_proceeding);

export const deleteCongress_proceeding = (id) =>
  congress_proceedingApi.delete(`/${id}/`);

export const updateCongress_proceeding = (id, congress_proceeding) =>
  congress_proceedingApi.put(`/${id}/`, congress_proceeding);
