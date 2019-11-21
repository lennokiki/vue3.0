<template>
  <div class="container">
    <h2>a1</h2>
  </div>
</template>

<script>
import { getData } from '@/api';
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
    async fetchData() {
      const params = {
        location: "嘉兴",
        output: "son",
        ak: "5slgyqGDENN7Sy7pw29IUvrZ",
      }
      const data = await getData({params})
      console.log('data', data)
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
