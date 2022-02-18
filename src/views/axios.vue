<template>
  <h1>{{ msg }}</h1>
  <h1>axios.vue</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/Jonas-lu')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>

<style lang="less" scoped></style>
