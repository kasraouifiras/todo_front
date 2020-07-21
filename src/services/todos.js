import axios from "axios";
import authHeader from '../helpers/authHelper';
const api = axios.create({
  baseURL: "http://localhost:8000/api/todos",
});

export function showAllTodos() {
  return api.get("",{ headers: authHeader() });
}

export function showLoggedUserTodos() {
  return api.get("/byuser",{ headers: authHeader() });
}

export function showTodo(todo_id) {
  return api.get("/" + todo_id, { headers: authHeader() });
}

export function deleteTodo(todo_id) {
  return api.delete("/" + todo_id, { headers: authHeader() });
}

export function updateTodo(todo_id, data) {
  return api.put("/" + todo_id, data, { headers: authHeader() });
}

export function clearCompleted(){
  return api.delete("/completed", { headers: authHeader() });
}

export function addTodo(todo) {
  return api.post("", todo, { headers: authHeader() });
}
