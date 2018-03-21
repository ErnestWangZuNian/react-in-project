import Api from "wzn-api";
let api = new Api();
let apiInstance = api.create();

// 添加请求拦截器
apiInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
apiInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default api;
