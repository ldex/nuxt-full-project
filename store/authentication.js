export const state = () => ({
  token: null
})

export const getters = {
  loggedIn: (state) => {
    return !!state.token
  }
}

export const mutations = {
  setToken(state, payload) {
    state.token = payload;
    if (process.client) {
      localStorage.setItem('auth_token', JSON.stringify(payload))
    }
    this.$axios.defaults.headers.common.Authorization = `Bearer ${payload
      }`
  },
  clearToken(state) {
    state.token = null;
  }
}

export const actions = {
  login({ commit }, credentials) {
    return this.$axios
      .post(this.$config.authServerURL, credentials)
      .then(({ data }) => {
        commit('setToken', data.token)
      })
  },
  setAuthToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  }
}