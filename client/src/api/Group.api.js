import axios from "axios";

const groupApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/groups/",
});

export const getAllGroups = () => groupApi.get("/");

export const getGroup = (id) => groupApi.get(`/${id}/`);

export const createGroup = (group) => groupApi.post("/", group);

export const deleteGroup = (id) => groupApi.delete(`/${id}/`);

export const updateGroup = (id, group) => groupApi.put(`/${id}/`, group);
