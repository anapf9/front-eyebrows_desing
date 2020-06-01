<template>
<div>
  Créditos e Indicações
  <Stepper />
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered padding>

      <q-separator spaced />
      <q-item-label header>Histórico</q-item-label>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>List item</q-item-section>
        <q-item-section side>
          <q-checkbox v-model="val" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />
    </q-list>
  </div>
</div>

</template>

<script>
import Stepper from 'src/components/Stepper.vue'
export default {
  name: 'Credits and Indications',
  components: {
    Stepper
  },
  data () {
    return {
      val: true
    }
  }
}
</script>

<style>

</style>
