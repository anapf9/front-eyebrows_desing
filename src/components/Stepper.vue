<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        v-for="step in steps"
        :key="step.id"
        :name="step.id"
        :title="step.type"
        :done="step.finnish"
        caption="Aguardando Retirada"
        icon="settings"
        color="pink-5"
      >
        {{step.points}} fdgdf
      </q-step>

      <!-- <q-step
        :name="2"
        title="Nome do Produto"
        caption="Aguardando Retirada"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Nome do Indicado"
        caption="Aguardando Retirada"
        icon="assignment"
        disable
      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Nome do Produto"
        caption="Aguardando Retirada"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

      </q-step> -->
    </q-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      steps: [
        {
          id: 1,
          type: 'Product',
          info: '',
          finnish: false,
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
      ]
    }
  }
}
</script>

<style>

</style>
