const state = {
  isLock: sessionStorage.getItem('isLock'),
  breadcrumbList: [],
}

const mutations = {
  TOGGLE_ISLOCK: (state, status) => {
    state.isLock = status;
  },
  CHANGE_BREADCRUMBLIST: (state, list) => {
    state.breadcrumbList = list;
  },
}

const actions = {
  // 切换锁定状态
  toggleIsLock({ commit }, status) {
    commit('TOGGLE_ISLOCK', status)
  },
  // 添加面包屑
  changeBreadcrumbList({ commit }, list) {
    commit('CHANGE_BREADCRUMBLIST', list);
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
