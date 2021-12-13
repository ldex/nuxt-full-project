import createRepository from '~/api/repository'

export default function (context, inject) {

    // Using the default axios instance
    const httpClientWithAxios = context.$axios;

    const repositoryWithHttpClient = createRepository(httpClientWithAxios)

    const repositories = {
      products: repositoryWithHttpClient('products'),
      customers: repositoryWithHttpClient('customers')
    }

    inject('repositories', repositories)

    // Create a custom axios instance for another server
    // const httpClient2WithAxios = context.$axios.create({
    //   headers: {
    //     common: {
    //       Accept: 'application/json'
    //     }
    //   }
    // })
    // httpClient2WithAxios.setBaseURL(context.$config.server2BaseURL)

    // const repository2WithHttpClient = createRepository(httpClient2WithAxios)

    // inject('partnersRepository', repository2WithHttpClient('partners'))
  }