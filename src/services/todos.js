import axios from "axios";
import authHeader from '../helpers/authHelper';
const api = axios.create({
  baseURL: "http://localhost:8000/api/todos",
});

api.interceptors.request.use(function(config) {
  let token = JSON.parse(localStorage.getItem('token'));
  console.log(token)
  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});

export function showAllTodos() {
  return api.get("");
}

export function showLoggedUserTodos() {
  return api.get("/byuser");
}

export function showTodo(todo_id) {
  return api.get("/" + todo_id);
}

export function deleteTodo(todo_id) {
  return api.delete("/" + todo_id);
}

export function updateTodo(todo_id, data) {
  return api.put("/" + todo_id, data);
}

export function clearCompleted(){
  return api.delete("/completed");
}

export function addTodo(todo) {
  return api.post("", todo);
}
