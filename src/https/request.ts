import axios from 'axios'

class Request  {
  public  server : any;
  constructor (conf:any) {
    this.server  = axios.create(conf)
    this.server.interceptors.request.use(
      (config: any) => {
        // const token = sessionStorage.getItem('token')
        config.headers['Authorization'] = '94107d6d3056e02a90a249da95bffc3e.vUBRVmOFJ0izUJMd'
        return config
      },
    (error: any) => {
      return Promise.reject(error)
    })

    this.server.interceptors.response.use(
      (response: any) => {
        if (response.status === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      },
    (error: any) => {
      // gotoLogin()
      console.log(error, 'error')
      return Promise.reject(error)
    })
  }

  public get<T>(url: string, params?: any, data = {}): Promise<IResponseData<T>> {
    let requestUrl = url;
    return this.server.get(requestUrl, {
      params,
      ...data
    })
  }
  public post<T>(url: string, params?: any, data = {}): Promise<IResponseData<T>> {
    return this.server.post( url, params, data)
  }
}

const config = {
  baseURL: '/',
  timeout: 500000, // 请求超时时间
}
export default new Request(config)