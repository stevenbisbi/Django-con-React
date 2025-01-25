import axios from "axios";

const scientificJournalApi = axios.create({
  baseURL: "http://localhost:8000/crud/api/v1/scientificJournals/",
});

export const getAllScientificJournals = () => scientificJournalApi.get("/");

export const getScientificJournal = (id) => scientificJournalApi.get(`/${id}/`);

export const createScientificJournal = (scientificJournal) =>
  scientificJournalApi.post("/", scientificJournal);

export const deleteScientificJournal = (id) =>
  scientificJournalApi.delete(`/${id}/`);

export const updateScientificJournal = (id, scientificJournal) =>
  scientificJournalApi.put(`/${id}/`, scientificJournal);
