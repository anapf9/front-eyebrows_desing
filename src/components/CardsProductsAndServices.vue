<template>
  <div class="q-px-md q-py-md ">
    <q-card class="my-card">
      <img :src="values.img">
      <q-card-section>
        <div class="text-h6">{{ values.title }}</div>
        <div class="text-subtitle2">{{ values.cost }} pontos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ values.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Cards Products and Services Values',
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
