const getters = {
  isLock: satte => satte.app.isLock,
  breadcrumbList: state => state.app.breadcrumbList,
  permission_routes: state => state.permission.routes,
};

export default getters;
