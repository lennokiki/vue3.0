const state = {
  isLock: sessionStorage.getItem('isLock')
}

const mutations = {
  TOGGLE_ISLOCK: (state, status) => {
    state.isLock = status;
  }
}

const actions = {
  toggleIsLock({ commit }, status) {
    commit('TOGGLE_ISLOCK', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
