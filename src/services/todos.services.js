import axios from "axios";
import authHeader from '../helpers/authHelper';
const api = axios.create({
  baseURL: "http://localhost:8000/api/todos",
});

export function showAllTodos() {
  return api.get("",{ headers: authHeader() }).then((res) => res.data);
}

export function showTodo(todo_id) {
  return api.get("/" + todo_id, { headers: authHeader() }).then((res) => res.data);
}

export function deleteTodo(todo_id) {
  return api.delete("/" + todo_id, { headers: authHeader() }).then((res) => res.data);
}

export function updateTodo(todo_id, data) {
  return api.put("/" + todo_id, data, { headers: authHeader() }).then((res) => res.data);
}

export function addTodo(todo) {
  return api.post("", todo, { headers: authHeader() }).then((res) => res.data);
}
