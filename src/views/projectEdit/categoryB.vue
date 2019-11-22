<template>
  <div class="container">
    <el-form :inline="true" ref="categoryB" :model="formInline" class="demo-form-inline form-wrap">
      <el-form-item label="项目状态" prop="projectStatus">
        <el-select v-model="formInline.projectStatus">
          <el-option v-for="(item, index) in projectStatusList" :key="'o1' + index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="未立项项目审批权限" prop="approvalAuth">
        <el-select v-model="formInline.approvalAuth">
          <el-option v-for="(item, index) in projectStatusList" :key="'o2' + index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="牵头单位" prop="headCompany">
        <el-select v-model="formInline.headCompany">
          <el-option v-for="(item, index) in projectStatusList" :key="'o3' + index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上报单位" prop="reportCompany">
        <el-select v-model="formInline.reportCompany">
          <el-option v-for="(item, index) in projectStatusList" :key="'o4' + index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onFormSearch" icon="el-icon-search" :loading="searchLoading">查询</el-button>
        <el-button type="danger" @click="onFormReset" icon="el-icon-refresh-right">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row type="flex" align="middle" class="btn-wrap">
      <el-button @click="handleEdit" icon="el-icon-edit">编辑</el-button>
      <el-button @click="handleDelete" :loading="deleteLoading" icon="el-icon-delete">删除</el-button>
      <el-button @click="handleSearch" icon="el-icon-setting">设置B类项目一级分类</el-button>
      <el-upload
        class="upload-custom"
        :action="uploadAction"
        multiple
        :limit="3"
        accept=".xlsx"
        :disabled="distributeUploading"
        :before-upload="handleBeforeUpload"
        :on-success="handleDistributeSuccess"
        :on-error="handleDistributeError"
        :show-file-list="false"
        :on-exceed="handleExceed"
        :file-list="fileList">
          <el-button :loading="distributeUploading" icon="el-icon-upload2">分发Excel</el-button>
      </el-upload>
      <el-button @click="handleImport" icon="el-icon-upload2">导入分发Excel</el-button>
      <el-button @click="handleExport" :loading="downloadLoading" icon="el-icon-download">导出Excel总表</el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px;"
      row-key="projectId"
      stripe
      :header-cell-style="{background:'#545c64',color:'#fff'}"
      @selection-change="handleSelectionChange"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        v-for="(item, index) in tableColumn"
        :key="item.projectId"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :type="item.type"
        :sortable="item.sortable"
        :align="item.align"
        :sortabled="item.sortabled"
      />
    </el-table>
  </div>
</template>

<script>
import { getCategoryBList, postCategoryBUpload, getCategoryBSearch } from '@/api/projectEdit';
import { tableColumn } from './categoryBTable';
export default {
  name: 'categoryB',
  data() {
    return {
      uploadAction: postCategoryBUpload,
      formInline: {
        projectStatus: '',
        approvalAuth: '',
        headCompany: '',
        reportCompany: '',
      },
      projectStatusList: [
        { label: '正常', value: 1 },
        { label: '停滞', value: 2 },
      ],
      downloadLoading: false,
      filename: '测试下载文件',
      autoWidth: true,
      bookType: 'xlsx',
      tableData: [],
      tableColumn: tableColumn,
      multipleSelection: [],
      deleteLoading: false,
      searchLoading: false,
      distributeUploading: false,
      fileList: [],
    }
  },
  created() {
    this.initFetchTable();
  },
  methods: {
    initFetchTable() {
      // 初始化加载table
      getCategoryBList()
        .then((res) => {
          this.tableData = res;
        }).catch((err) => {
          this.searchLoading = false;
          this.$message.error('获取列表失败');
        })
    },
    onFormSearch() {
      this.$refs['categoryB'].validate((valid) => {
        this.searchLoading = true;
        getCategoryBSearch({params: this.formInline})
          .then((res) => {
            this.tableData = res;
            this.searchLoading = false;
          }).catch((err) => {
            this.searchLoading = false;
            this.$message.error('查询失败');
          })
      })
    },
    onFormReset() {
      this.$refs['categoryB'].resetFields();
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() {

    },
    handleDelete() {
      if (!this.multipleSelection.length) return this.$message.error('请先选择删除项');
      // this.handleDelete = true;

      // const projectIdList = this.multipleSelection.map((item) => item.projectId)
    },
    handleSearch() {

    },
    handleBeforeUpload() {
      this.distributeUploading = true;
    },
    handleDistributeSuccess(response, file, fileList) {
      this.distributeUploading = false;
      this.$message.success('上传成功');
    },
    handleDistributeError(err, file, fileList) {
      this.distributeUploading = false;
      this.$message.error('上传失败');
    },
    handleImport() {

    },
    handleExport() {
      this.downloadLoading = true
      import('@/utils/Export2Excel').then(excel => {
        const tHeader = ['id', 'title', 'author', 'readings', 'date']
        excel.export_json_to_excel({
          header: tHeader,
          data: [
            ['111', '标题111', '作者', 'adddd', '2019-11-22'],
            ['222', '标题111', '作者', 'adddd', '2019-11-22'],
            ['333', '标题111', '作者', 'adddd', '2019-11-22'],
            ['4444', '标题111', '作者', 'adddd', '2019-11-22'],
          ],
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.$message.success('导出成功');
        this.downloadLoading = false
      })
    },
    handleExport2() {
      // 调用后台接口导出
      ajax.post('xxxx')
        .then((res) => {
          var blob = new Blob([JSON.stringify(res.data)], { type: res.headers['content-type'] });
          var contentDisposition = res.headers['content-disposition'];
          var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
          var result = patt.exec(contentDisposition);
          var filename = result[1];
          var downloadElement = document.createElement('a');
          var href = window.URL.createObjectURL(blob); //创建下载的链接
          downloadElement.style.display = 'none';
          downloadElement.href = href;
          downloadElement.download = filename; //下载后文件名
          document.body.appendChild(downloadElement);
          downloadElement.click(); //点击下载
          document.body.removeChild(downloadElement); //下载完成移除元素
          window.URL.revokeObjectURL(href); //释放掉blob对象
          this.$message.success(intl.get('导出成功'));
        }).catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    .form-wrap {
      text-align: left;
    }
    .btn-wrap {
      margin-bottom: 20px;
    }
    .table-header {
      background: #555;
    }
    .upload-custom {
      margin: 0 10px;
    }
  }
</style>
