import axios from 'axios'

// const config = {
//   baseURL: ['dev', 'test', 'production'].includes(process.env.NODE_ENV) ? "http://localhost:8081" : '/', //根据环境变量去选择服务
//   timeout: 30 * 1000,
//   responseType: "json" //返回值类型
// };

axios.create({
  //crossDomain: true,//设置cross跨域
  withCredentials: false, //跨域请求是否允许携带cookie资源凭证
  baseurl: "http://localhost:8081",
  time: 1000, //请求超时时间
  responseType: "json" //返回值类型
  // responseType:"arraybuffer"  返回的数据格式


})

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method != 'get') {
      config.data = JSON.stringify(config.data);
    }
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    config.headers = {
      'Content-Type': "application/json;charsetset=UTF-8" //转换数据格式
    }

    //  设置token可以判断是否处于登录状态， 每次请求的时候将token带上
    // let token = window.sessionStorage.getItem("TOKEN");
    // if (token) {
    //   config.params = {
    //     'token': token
    //   }
    // }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)


// http response 拦截器
axios.interceptors.response.use(
  response => {
    //自己配置一些状态码
    // if(response.data.errCode == 2){

    // }
    return response;
  },
  error => {
    //与后台人员协商配置
    return Promise.reject(error)
  }
)


/*
 *get 方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params[请求携带的参数]]
 */


export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  });
}



/*
 *post 方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params[请求携带的参数]]
 */


export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data);
      })
  });
}


/*
 *封装patch请求
 *@param url
 * @param params
 * @returns {Promise}
 */


export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
  })
}


/*
 *put 请求
 *@param url
 * @param params
 */


export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
  })
}
