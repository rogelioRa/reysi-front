export const state = () => ({
  fullPageLoading: true
})

export const mutations = {

  setFullPageLoading (state, _load) {
    state.fullPageLoading = _load
  }

}
