<template>
  <div class="q-pa-md ">
    <div class="q-gutter-md row items-center justify-center">
      <q-date v-model="date" mask="YYYY-MM-DD HH:mm" color="pink-5" />
      <q-time v-model="date" mask="YYYY-MM-DD HH:mm" color="pink-5" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '2019-02-22 21:02',
      options: ['2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23']
    }
  },

  methods: {
    optionsFn (date) {
      return date >= '2019/02/03' && date <= '2019/02/15'
    },

    optionsFn2 (date) {
      const parts = date.split('/')
      return parts[2] % 2 === 0
    }
  }
}
</script>

<style>

</style>
