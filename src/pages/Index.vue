<template>
  <q-page class="q-ma-xl">
    <div class="row items-start content-center justify-center q-gutter-md q-mt-sm ">
    <q-card class="my-card event-card" v-for="links in essentialLinks" :key="links.link" >
        <router-link class="event-link" :to="`${links.link}`">
      <q-card-section horizontal>
        <img
          class="col"
          :src="links.svg"
        />
        <q-card-section class="col text-h6 self-end">
          {{ links.title }}
        </q-card-section>
      </q-card-section>
        </router-link>
    </q-card>
      <!-- <Cards v-for="links in essentialLinks" :key="links.link" :menu="links" /> -->
    </div>
  </q-page>
</template>
<script>
// import Cards from 'src/components/Cards.vue'
export default {
  name: 'PageIndex',
  components: {
  //  Cards
  },
  data () {
    return {
      essentialLinks: [
        {
          title: 'Agende sua Próxima Visita',
          svg: 'statics/illustrations/undraw_Booked_j7rj.svg',
          link: '/sua_proxima_visita'
        },
        {
          title: 'Histórico de Procedimentos',
          svg: 'statics/illustrations/undraw_terms_lso0.svg',
          link: '/historico_de_procedimentos'
        },
        {
          title: 'Indicações e Créditos',
          svg: 'statics/illustrations/undraw_share_766i.svg',
          link: '/indicacoes_e_creditos'
        },
        {
          title: 'Troca de Pontos',
          svg: 'statics/illustrations/undraw_gift_card_6ekc.svg',
          link: '/troca_de_pontos'
        }
      ]
    }
  }
}
</script>
<style>
.event-card {
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 500px;
  height: 200px;
  border-radius: 5px;
  background: #fff8fb;

}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: #231b33;
  text-decoration: none;
  font-weight: 500;
}
h5 {
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
}
img{
  width: auto;
  max-width: 150px;
  height: auto;
  max-height: 150px;
  overflow: hidden;
}

</style>
