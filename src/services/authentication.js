import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});


export function register(data){
  return api.post("/register",data).then(res => res.data)
}

export function logout(){
  localStorage.removeItem("token");
}

export function check_login(){
  if(localStorage.getItem('token')){
    return true
  }else{
    return false
  }
}

export function login(credentials){
  return api.post("/api/login_check",credentials).then(res =>res.data)
  .then(res =>{
    if(res.token){
      localStorage.setItem("token", JSON.stringify(res.token));
    }
  })
}