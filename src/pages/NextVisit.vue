<template>
  <div>
    Próximo agendamento
    <q-select standout="bg-pink-5 text-white" v-model="model" :options="options" label="Escolha o serviço desejado" />
    <Calendar />
    <q-btn class="px-2 py-2" color="pink-5" push>
      <div class="row items-center no-wrap">
        <q-icon left name="card_giftcard" />
        <div class="text-center">
          Confirmar Agendamento
        </div>
      </div>
    </q-btn>
  </div>
</template>

<script>
import Calendar from 'src/components/Calendar.vue'
export default {
  name: 'NextVisit',
  components: {
    Calendar
  },
  data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>

<style>

</style>
