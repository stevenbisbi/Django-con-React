import axios from "axios";

const authorApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/authors/",
});

export const getAllAuthors = () => authorApi.get("/");

export const getAuthor = (id) => authorApi.get(`/${id}/`);

export const createAuthor = (author) => authorApi.get("/", author);

export const deleteAuthor = (id) => authorApi.get(`/${id}/`);

export const updateAuthor = (id, author) => authorApi.get(`/${id}/`, author);
