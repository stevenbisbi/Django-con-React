import axios from "axios";

const articleApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/articles/",
});

export const getAllArticles = () => articleApi.get("/");

export const getArticle = (id) => articleApi.get(`/${id}/`);

export const createArticle = (article) => articleApi.get("/", article);

export const deleteArticle = (id) => articleApi.get(`/${id}/`);

export const updateArticle = (id, article) =>
  articleApi.get(`/${id}/`, article);
