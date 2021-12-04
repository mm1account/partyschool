import {
  post,
  get,
  put,
  patch
} from '@/axios/http.js'



export function getListAPI() {
  return get("/api/hello");
}

export function login(params) {
  return post("/api/helloPost", params);
}
