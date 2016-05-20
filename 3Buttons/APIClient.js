export default class APIClient {
  constructor(baseURL, options=null) {
    this.API_HOST = baseURL
    this.REQUEST_OBJECT = {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
    }

    if (options != null) {
      this.dispatch = options.dispatch
      this.getState = options.getState
    }
  }

  async get(path, params='') {
    this.REQUEST_OBJECT['method'] = 'GET'
    delete this.REQUEST_OBJECT['body']

    let requestURL = `${this.API_HOST}/${path}${params}` // TODO: add URL params

    // https://jakearchibald.com/2014/es7-async-functions/
    let response = await fetch(requestURL, this.REQUEST_OBJECT)
    console.log(`GET: ${requestURL}`)

    if (response.status !== 200) {
      return new Promise(resolve => resolve(Promise.reject(new Error(`Status ${response.status}`))))
    }

    return response.json()
  }
}
