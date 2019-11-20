import Layout from '@/layout'

export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('@/views/redirect/index')
  //     }
  //   ]
  // },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
]

export const asyncRoutes = [
  {
    path: '/dataClassification',
    component: Layout,
    // redirect: '/dataClassification/a1',
    alwaysShow: true, // will always show the root menu
    name: 'DataClassification',
    meta: {
      title: '数据分类浏览',
      icon: 'lock',
    },
    children: [
      {
        path: 'a1',
        component: () => import('@/views/dataClassification/a1'),
        name: 'a1',
        meta: {
          title: '分类浏览sub1',
          icon: 'lock',
        }
      },
      {
        path: 'a2',
        component: () => import('@/views/dataClassification/a2'),
        name: 'a2',
        meta: {
          title: '分类浏览sub2',
          icon: 'lock',
        }
      },
    ]
  },
  {
    path: '/projectEdit',
    component: Layout,
    // redirect: '/dataClassification/a1',
    alwaysShow: true, // will always show the root menu
    name: 'ProjectEdit',
    meta: {
      title: '数据分类浏览',
      icon: 'lock',
    },
    children: [
      {
        path: 'b1',
        component: () => import('@/views/projectEdit/b1'),
        name: 'b1',
        meta: {
          title: '数据编辑sub1',
          icon: 'lock',
        }
      },
      {
        path: 'b2',
        component: () => import('@/views/projectEdit/b2'),
        name: 'b2',
        meta: {
          title: '数据编辑sub2',
          icon: 'lock',
        }
      },
    ]
  },
]
