export const state = () => ({
  user: null
})

export const mutations = {
  set (state, _user) {
    state.user = _user
  }
}
