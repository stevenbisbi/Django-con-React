import axios from "axios";

const technical_reportApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/technical_reports/",
});

export const getAllTechnical_reports = () => technical_reportApi.get("/");

export const getTechnical_report = (id) => technical_reportApi.get(`/${id}/`);

export const createTechnical_report = (technical_report) =>
  technical_reportApi.post("/", technical_report);

export const deleteTechnical_report = (id) =>
  technical_reportApi.delete(`/${id}/`);

export const updateTechnical_report = (id, technical_report) =>
  technical_reportApi.put(`/${id}/`, technical_report);
