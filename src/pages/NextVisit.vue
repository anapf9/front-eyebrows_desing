<template>
  <div class="fit column wrap justify-center content-center">
    Próximo agendamento
    <q-select class="q-pa-md" standout="bg-pink-5 text-white" v-model="model" :options="options" label="Escolha o serviço desejado" />
    <Calendar />
    <q-btn class="q-pa-sm q-mt-md self-center" color="pink-5" push>
        <q-icon left name="card_giftcard" />
        <div class="text-center">
          Confirmar Agendamento
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
