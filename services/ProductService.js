const RESOURCE_NAME = 'products';
const productsUrl = config.baseURL + RESOURCE_NAME;

export default {
  clearCache: false,

  getProducts() {
    const sortParams = `?$orderby=ModifiedDate%20desc`;
    const forceUpdateOnce = this.clearCache;
    this.clearCache = false;
    return httpClient.get(productsUrl + sortParams, { forceUpdate: forceUpdateOnce })
  },

  getProduct(id) {
    return httpClient.get(`${RESOURCE_NAME}/${id}`)
  },

  insertProduct(product) {
    this.clearCache = true;
    return httpClient.post(RESOURCE_NAME, product)
  },

  deleteProduct(product) {
    this.clearCache = true;
    return httpClient.delete(`${RESOURCE_NAME}/${product.id}`)
  },
}