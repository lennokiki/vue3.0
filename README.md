
# xxxxxx 后台管理系统

# 技术栈
  * vue@2.6 [文档地址](https://cn.vuejs.org/)
  * vuex@3.0 [文档地址](https://vuex.vuejs.org/zh/guide/)
  * vue-router@3.0 [文档地址](https://router.vuejs.org/zh//)
  * element-ui@2.0 [文档地址](https://element.eleme.cn/#/zh-CN/component/installation)
  * axios@0.19 [文档地址](http://www.axios-js.com/zh-cn/docs/)
  * vue-cli@4.0 [文档地址](https://cli.vuejs.org/zh/guide/)

# 开发环境

* 开发环境：`node@10+`
* 测试环境浏览器： `chrome`、`360急速`、`其他`

# 项目地址
  * ssh: git@gitee.com:l372563106/project-v1.git
  * https: https://gitee.com/l372563106/project-v1.git
  * `ssh` 协议地址需要管理员手动添加权限，并再本地生成密钥

# 项目启动
  ```bash
    # 下载项目到本地
    git clone https://gitee.com/l372563106/project-v1.git
    # 切换至项目文件
    cd project-v1
    # 安装依赖 项目使用sass预处理器，安装node-sass较耗时并有可能失败，失败时可尝试切换npm源进行再次安装
    npm i
    # 启动
    npm serve
    # http://localhost:8080/ 打开浏览器, 默认8080端口
  ```
  *  npm换源文档地址 [传送门](https://npm.taobao.org/)

# 建议使用 `yarn` 包管理工具安装依赖
  ```bash
    # 建议使用 `yarn` 包管理工具安装依赖，全局安装 yarn 管理工具
    npm i -g yarn
    # 检测 yarn 是否安装完成，查看 yarn 版本
    yarn -v
    # 安装依赖 若失败 可尝试多安装几次
    yarn
    # 启动项目
    yarn serve
  ```

# 项目结构目录
  ```bash
  ├─mock                前端本地模拟数据
  │  ├─index.js
  │  ├─mock-server.js   express mock服务器
  │  ├─projectEdit.js   模拟数据，导出对应的mock数据
  ├─public
  │  ├─index.html       html文件
  ├─src
  │  ├─api              所有api请求文件，按照view视图页面区分模块
  │  ├─assets           静态资源文件，图片，全局css样式
  │  ├─config           线上环境接口实际请求地址
  │  ├─directives       全局自定义指令
  │  ├─filters          全局过滤器
  │  ├─layout           容器布局组件
  │  ├─router           路由配置文件
  │  │  ├─index.js      路由守卫
  │  │  ├─routes.js     路由表（在此添加和修改路由），hidden: true 的不在导航栏中显示
  │  ├─store            vuex全局状态管理 按照模块划分，可自行进行添加或者删减
  │  ├─utils            工具类文件
  │  ├─views            视图文件
  │  ├─App.vue          根组件
  │  ├─main.js          主配置文件
  ├─package.json        依赖文件、启动命令
  ├─vue.config.js       vue全局配置文件
  ```

# 项目开发注意事项

  * 开发环境使用本地代理服务 vue.config.js 修改
  ```bash
  # 本地代理
  proxy: {
    '/api': {
      target: 'http://api.map.baidu.com/telematics/v3/', # 后台真正请求地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  ``` 

  * 接口调用方式--使用本地mock数据
  ```bash
    # 根据页面对应路由，创建或使用对应mock数据模块，如 mock/projectEdit 对应 src/views/projectEdit
    # 1. projectEdit 中导出模拟数据
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
    ]
    
    # 2. src/api 中定义 接口地址
    import {ajax} from '@/utils'; // ajax 包含 post、get、delete、head、patch等请求方式，需要与mock数据中的 type 字段相对应
    import { mockUrl, apiUrl } from '@/config'; 
    #  // 获取table列表
    export const getCategoryBList = () => ajax.get(`${mockUrl}/categoryB/list`);

    # 3. 页面组件内使用 src/api 中定义好的方法: src/views/projectEdit/categoryB.vue
    import { getCategoryBList } from '@/api/projectEdit';
    # 使用
    methods: {
      initFetchTable() {
        getCategoryBList()
          .then((res) => {
            this.tableData = res;
          }).catch((err) => {
            this.searchLoading = false;
            this.$message.error('获取列表失败');
          })
      },
    }
  ```

  * 接口调用方式--使用本地线上数据
  ```bash
    # 使用线上数据同使用本地mock数据基本相同，可省略步骤1，直接定义接口
    # /api 后路径为真实线上地址，/api再此处只起到使用本地代理的作用
    # 如线上地址为 http://192.80.33.17:8080/v3/user/userList, vue.config.js中target配置为：http://192.80.33.17:8080/v3
    # 那么 此处的请求地址应当为：/api/user/userList 
    import {ajax} from '@/utils';
    import { mockUrl, apiUrl } from '@/config'; 
    export const getCategoryBList = (data) => ajax.get(`${apiUrl}/xxx/xxx`, data);

    # 组件内引入 传入参数即可
  ```

  * get 和 post传入参数的区别
  ```bash
    # 遵循axios原配置
    # get 方式传入参数, 参数放在 params 下
    () => ajax.get('/xx', {params: {user: 'a'}})

    # post 方式传入参数，直接传入对象即可
    () => ajax.post('/xx', {user: 'a'})
  ```

  * 上传文件单独定义接口地址
  ```bash
    # api 中定义接口地址
    export const postCategoryBUpload = `${mockUrl}/categoryB/upload`;

    # 组件内引入
    import { postCategoryBUpload } from '@/api/projectEdit';

    # 赋值为当前组件data
    data() {
      return {
        uploadAction: postCategoryBUpload
      }
    }

    # template 控件内使用element-ui upload上传，注意 :action 为动态解析
    <el-upload
      class="upload-custom"
      :action="uploadAction"
      multiple
      :file-list="fileList">
        <el-button :loading="distributeUploading" icon="el-icon-upload2">分发Excel</el-button>
    </el-upload>

  ```

# 打包注意事项

  ```bash
    # 注意在 src/config.js 将 baseUrl 设置为真正线上接口地址
    if (isProd) {
      baseUrl = "http://www.baidu.com/api";
      mockUrl = "";
      apiUrl = "";
    }
  ```



  



