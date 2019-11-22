<template>
  <div class="container">
    <h2>a1</h2>
  </div>
</template>

<script>
import { getA1List } from '@/api/dataClassification';
export default {
  name: 'a1',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getA1List()
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          this.$message.error("获取数据失败");
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
