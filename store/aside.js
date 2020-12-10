export const state = () => ({
  activeLink: null
})

export const mutations = {

  setActiveLink (state, _link) {
    state.activeLink = _link
  }

}
