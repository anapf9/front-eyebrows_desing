<template>
  <div>
      Histórico de Procedimentos
    <div class="fit row wrap justify-center content-center">
      <CardProcedures class="q-ma-sm" v-for="n in 3" :key="n" />
    </div>
  </div>
</template>

<script>
import CardProcedures from 'src/components/CardProcedures.vue'
export default {
  name: 'HistoryProcedure',
  components: {
    CardProcedures
  }
}
</script>

<style>

</style>
