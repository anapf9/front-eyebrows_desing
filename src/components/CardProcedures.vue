<template>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn
          round
          color="primary"
          icon="share"
          class="absolute"
          size="sm"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <br>
          <div class="col text-h6 ellipsis">
            Nome do Procedimento
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="20px" />
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          <q-icon left name="event" />
          <span color="primary">
            Dia 01/01/2020
          </span>
        </div>
        <div class="text-caption text-grey">
          Comentario Dayci
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'CardProcedures'

}
</script>

<style>
</style>
