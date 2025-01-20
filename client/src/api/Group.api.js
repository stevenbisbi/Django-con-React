import axios from "axios";

const groupApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/groups/",
});

export const getAllGroups = () => groupApi.get("/");

export const getGroup = (id) => groupApi.get(`/${id}/`);

export const createGroup = (group) => groupApi.get("/", group);

export const deleteGroup = (id) => groupApi.get(`/${id}/`);

export const updateGroup = (id, group) => groupApi.get(`/${id}/`, group);
