export const state = () => ({
    list: [],
    product: {}
})

export const getters = {
    getProductById: state => id => {
        return state.list.find(product => product.id === id);
    }
}

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.list = payload;
    },
    ADD_PRODUCT(state, product) {
        state.list.push(product)
    },
    SET_PRODUCT(state, payload) {
        state.product = payload;
    },
    REMOVE_PRODUCT(state, id) {
        state.list = state.list.filter(product => product.id !== id);
    }
}

export const actions = {
    fetchProducts({ commit }) {
        return this.$repositories.products.get()
            .then(response => {
                commit('SET_PRODUCTS', response.data);
            })
    },
    fetchProduct({ commit, getters }, id) {
        const p = getters.getProductById(id);
        if (p == null) {
            this.$repositories.products.getById(id)
                .then(response => {
                    commit('SET_PRODUCT', response.data);
                })
        } else {
            commit('SET_PRODUCT', p);
        }
    },
    addProduct({ commit }, newProduct) {
        return this.$repositories.products.create(newProduct)
            .then(() => {
                commit('ADD_PRODUCT', newProduct);
            })
    },
    deleteProduct({ commit }, id) {
        return this.$repositories.products.delete(id).then(() => {
            commit("REMOVE_PRODUCT", id);
        });
    }
}