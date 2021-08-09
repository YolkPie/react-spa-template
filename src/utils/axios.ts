import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'

class HttpRequest {
  public queue: any // 请求的url集合

  public constructor (public baseUrl?: string) {
    this.baseUrl = baseUrl || ''
    this.queue = {}
  }

  getInsideConfig (): AnyObj {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      timeout: 6000,
      withCredentials: true // 允许携带cookies
    }
    return config
  }

  destroy (url: string): void {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors (instance: AnyObj, url: string): void {
    // 请求拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true

      return config
    }, (error: any) => Promise.reject(error))

    // 响应拦截
    instance.interceptors.response.use((res: AxiosResponse) => {
      this.destroy(url)
      const { data, status } = res || {}

      return { data, status }
    }, (error: any) => {
      this.destroy(url)
      return Promise.reject(error)
    })
  }

  request (options: AnyObj): any {
    const instance = axios.create()
    axiosRetry(axios, {
      retries: 4,
      retryDelay: (retryCount) => retryCount * 1000
    })

    const tmpOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, tmpOptions.url)

    return instance(tmpOptions)
  }
}

export default HttpRequest
