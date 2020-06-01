<template>
<div>
  Histórico de Procedimentos
  <CardProcedures class="m-5" v-for="n in 3" :key="n" />
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
