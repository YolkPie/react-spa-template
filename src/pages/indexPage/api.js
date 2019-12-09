import {
  getApi1,
  getApi2
} from './mock'

// apiGet1
export const apiGet1 = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(getApi1)
  }, 300)
})

// apiGet2
export const apiGet2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const { code, data } = getApi2
    if (code === 0) {
      resolve(data)
      return
    }

    reject(new Error(data))
  }, 300)
})
