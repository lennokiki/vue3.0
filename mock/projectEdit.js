const Mock = require('mockjs');

const list = [
  {
    projectId: 1,
    name: 'xxxx项目',
    approvalTime: '2016-05-01',
    plan: 'AAAA',
    headCompany: '国家审计中心',
    joinCompany: '北京审计中心',
    projectAuth: 'cc项目',
    planInvest: '60000',
    yearInvest: '2000',
    projectStatus: '正常',
    reportCompany: '国资委',
    fillInCompany: '国家审计中心2科'
  },
  {
    projectId: 2,
    name: 'yyyy项目',
    approvalTime: '2016-05-02',
    plan: 'AAAA',
    headCompany: '国家审计中心',
    joinCompany: '北京审计中心',
    projectAuth: 'cc项目',
    planInvest: '60000',
    yearInvest: '2000',
    projectStatus: '正常',
    reportCompany: '国资委',
    fillInCompany: '国家审计中心2科'
  },
  {
    projectId: 3,
    name: 'zzz项目',
    approvalTime: '2016-05-03',
    plan: 'AAAA',
    headCompany: '国家审计中心',
    joinCompany: '北京审计中心',
    projectAuth: 'cc项目',
    planInvest: '60000',
    yearInvest: '2000',
    projectStatus: '正常',
    reportCompany: '国资委',
    fillInCompany: '国家审计中心2科',
    children: [
      {
        projectId: 4,
        name: 'qqqq项目',
        approvalTime: '2016-05-04',
        plan: 'AAAA',
        headCompany: '国家审计中心',
        joinCompany: '北京审计中心',
        projectAuth: 'cc项目',
        planInvest: '60000',
        yearInvest: '2000',
        projectStatus: '正常',
        reportCompany: '国资委',
        fillInCompany: '国家审计中心2科'
      },
      {
        projectId: 5,
        name: '8888项目',
        approvalTime: '2016-05-05',
        plan: 'AAAA',
        headCompany: '国家审计中心',
        joinCompany: '北京审计中心',
        projectAuth: 'cc项目',
        planInvest: '60000',
        yearInvest: '2000',
        projectStatus: '正常',
        reportCompany: '国资委',
        fillInCompany: '国家审计中心2科'
      }
    ]
  },
  {
    projectId: 7,
    name: 'yyyy项目',
    approvalTime: '2016-05-06',
    plan: 'AAAA',
    headCompany: '国家审计中心',
    joinCompany: '北京审计中心',
    projectAuth: 'cc项目',
    planInvest: '60000',
    yearInvest: '2000',
    projectStatus: '正常',
    reportCompany: '国资委',
    fillInCompany: '国家审计中心2科'
  }
]

module.exports = [
  {
    url: '/categoryB/list',
    type: 'get',
    response: config => {
      return {
        status: 200,
        data: list,
        msg: ''
      }
    }
  },
  {
    url: '/categoryB/upload',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: [],
        msg: ''
      }
    }
  },
  {
    url: '/categoryB/search',
    type: 'get',
    response: config => {

      return {
        status: 200,
        data: list.slice(0, 2),
        msg: ''
      }
    }
  }
]
