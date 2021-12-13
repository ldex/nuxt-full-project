// Allows you to create repositories instances with a nuxt-axios instance (or any other Http library) and the resource to query
// See /plugins/repositories.js
export default httpClient => resource => ({
    get(options) {
      return httpClient.get(`${resource}`, options)
    },

    getById(id) {
      return httpClient.get(`${resource}/${id}`)
    },

    create(payload) {
      return httpClient.post(`${resource}`, payload)
    },

    update(id, payload) {
      return httpClient.post(`${resource}/${id}`, payload)
    },

    delete(id) {
      return httpClient.delete(`${resource}/${id}`)
    }
  })
