import { asyncRoutes, constantRoutes } from '@/router/routes'

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = [].concat(routes, constantRoutes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      commit('SET_ROUTES', asyncRoutes);
      resolve(asyncRoutes);
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
