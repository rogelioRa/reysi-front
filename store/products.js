export const state = () => ({
  products: []
})

export const mutations = {
  setProducts (state, _products) {
    state.products = _products
  }
}
