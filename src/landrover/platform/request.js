// @flow
export default class Request  {
  request(url, method, data, header){
    return new Promise(function (resolve, reject) {
      // Do the usual XHR stuff
      const xhr = new XMLHttpRequest()
      xhr.timeout = 10000
      xhr.responseType = 'json'

      if (method === 'GET' || method === 'DELETE') {
        const param = []
        for (let key in data) {
          const value = data[key]
          if (value instanceof Array) {
            for (let item of value) {
              param.push(`${key}[]=${item}`)
            }
          } else {
            param.push(`${key}=${value}`)
          }
        }
        const paramKeyValuePairString = param.join('&')
        if (paramKeyValuePairString.length > 0) {
          url = `${url}?${paramKeyValuePairString}`
        }
        xhr.open(method, url, true)
      } else {
        xhr.open(method, url, true)
      }

      for (let key in header) {
        xhr.setRequestHeader(key, header[key])
      }

      // Hanle response load
      xhr.onload = function () {
        const data = xhr.response
        const statusCode = xhr.status
        const errMsg = xhr.statusText
        const header = xhr.getAllResponseHeaders()
        resolve({
          data,
          statusCode,
          errMsg,
          header
        })
      }

      // Handle network timeout
      xhr.ontimeout = (err) => {
        reject(err)
      }

      // Handle network errors
      xhr.onerror = (err) => {
        reject(err)
      }

      if (method === 'GET' || method === 'DELETE') {
        // Make the request
        xhr.send()
      } else {
        xhr.setRequestHeader('content-type', 'application/json')
        // Make the request
        const dataJSONString = JSON.stringify(data)
        xhr.send(dataJSONString)
      }
    })
  }
}
