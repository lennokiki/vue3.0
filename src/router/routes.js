import Layout from "@/layout";

export const constantRoutes = [
  // {
  //   path: "/redirect",
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: "/redirect/:path*",
  //       component: () => import("@/views/redirect/index")
  //     }
  //   ]
  // },
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: () => import("@/views/error-page/404")
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/error-page/401"),
    hidden: true
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "导航" }
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/dataClassification",
    component: Layout,
    name: "dataClassification",
    meta: {
      title: "数据分类浏览",
      icon: "lock"
    },
    children: [
      {
        path: "a1",
        name: "a1",
        component: () => import("@/views/dataClassification/a1"),
        meta: {
          title: "分类浏览sub1",
          icon: "lock"
        }
      },
      {
        path: "a2",
        name: "a2",
        component: () => import("@/views/dataClassification/a2"),
        meta: {
          title: "分类浏览sub2",
          icon: "lock"
        }
      },
    ]
  },
  {
    path: "/projectEdit",
    component: Layout,
    name: "projectEdit",
    meta: {
      title: "项目数据编辑",
      icon: "lock"
    },
    children: [
      {
        path: "categoryA",
        name: "categoryA",
        component: () => import("@/views/projectEdit/categoryA"),
        meta: {
          title: "A类项目",
          icon: "lock"
        }
      },
      {
        path: "categoryB",
        name: "categoryB",
        component: () => import("@/views/projectEdit/categoryB"),
        meta: {
          title: "B类项目",
          icon: "lock"
        }
      },
      {
        path: "categoryC",
        name: "categoryC",
        component: () => import("@/views/projectEdit/categoryC"),
        meta: {
          title: "C类项目",
          icon: "lock"
        }
      }
    ]
  },
  {
    path: "/planList",
    component: Layout,
    name: "planList",
    meta: {
      title: "年度计划清单",
      icon: "lock"
    },
    children: [
      {
        path: "p1",
        name: "p1",
        component: () => import("@/views/planList/p1"),
        meta: {
          title: "A计划",
          icon: "lock"
        }
      },
      {
        path: "b1",
        name: "b1",
        component: () => import("@/views/planList/b1"),
        meta: {
          title: "B计划",
          icon: "lock"
        }
      }
    ]
  },
  {
    path: "/urgentlyMatched",
    component: Layout,
    name: "urgentlyMatched",
    meta: {
      title: "部队急需配套",
      icon: "lock"
    },
    children: [
      {
        path: "c1",
        name: "c1",
        component: () => import("@/views/urgentlyMatched/c1"),
        meta: {
          title: "c1配套",
          icon: "lock"
        }
      }
    ]
  },
  {
    path: "/systemControl",
    component: Layout,
    name: "systemControl",
    meta: {
      title: "系统管理",
      icon: "lock"
    },
    children: [
      {
        path: "baseInfo",
        name: "baseInfo",
        component: () => import("@/views/systemControl/baseInfo"),
        meta: {
          title: "项目基础信息",
          icon: "lock"
        }
      },
      {
        path: "companyConfiguration",
        name: "companyConfiguration",
        component: () => import("@/views/systemControl/companyConfiguration"),
        meta: {
          title: "项目单位配置",
          icon: "lock"
        }
      },
      {
        path: "distributeGather",
        name: "distributeGather",
        component: () => import("@/views/systemControl/distributeGather"),
        meta: {
          title: "数据分发汇总",
          icon: "lock"
        }
      },
      {
        path: "companyList",
        name: "companyList",
        component: () => import("@/views/systemControl/companyList"),
        meta: {
          title: "填报单位名录",
          icon: "lock"
        }
      },
      {
        path: "dictionaryManage",
        name: "dictionaryManage",
        component: () => import("@/views/systemControl/dictionaryManage"),
        meta: {
          title: "基础字典管理",
          icon: "lock"
        }
      }
    ]
  }
];
