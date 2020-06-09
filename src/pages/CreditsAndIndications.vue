<template>
<div>
  Créditos e Indicações
  <div class="q-pa-md" >
    <q-list v-for="step in steps" :key="step.id" padding>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="45px" class="text-weight-bold text-white" color="pink-5">{{ step.points }}</q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5 text-dark">{{ step.type }}</q-item-label>
          <q-item-label class="text-subtitle1 text-grey-7" lines="2"> {{ step.info }} </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-checkbox disable v-model="step.finnish" />
        </q-item-section>
      </q-item>
       <q-separator spaced inset />
    </q-list>
  </div>
</div>

</template>

<script>
export default {
  name: 'Credits and Indications',
  data () {
    return {
      val: true,
      steps: [
        {
          id: 1,
          type: 'Product',
          info: 'Teste',
          finnish: true,
          points: '500'
        },
        {
          id: 2,
          type: 'Person',
          info: '',
          finnish: false,
          points: '500'
        },
        {
          id: 3,
          type: 'Product',
          info: '',
          finnish: true,
          points: '50'
        },
        {
          id: 4,
          type: 'Person',
          info: '',
          finnish: false,
          points: '50'
        }
      ],
      types: [
        {
          type: 'Product',
          finnish: false,
          text: 'Aguardando retirada'
        },
        {
          type: 'Product',
          finnish: true,
          text: 'Retirado em: {{ data }}'
        },
        {
          type: 'Person',
          finnish: false,
          text: 'Aguardando Aguardando primeiro agendamento de {{ fulano }}'
        },
        {
          type: 'Person',
          finnish: true,
          text: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
