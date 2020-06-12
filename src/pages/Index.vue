<template>
  <q-page>
    <div class="q-pa-md row items-start content-center justify-center q-gutter-md ">
    <q-card class="my-card event-card" v-for="links in essentialLinks" :key="links.link" >
      <q-card-section horizontal>
        <img
          class="col"
          src="~assets/illustrations/undraw_attached_file_n4wm.svg"
        />

        <q-card-section class="col text-h6 self-end">
          {{ links.title }}
        </q-card-section>
      </q-card-section>
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
          svg: '~assets/illustrations/undraw_attached_file_n4wm.svg',
          link: '/sua_proxima_visita'
        },
        {
          title: 'Histórico de Procedimentos',
          svg: '../assets/illustrations/undraw_Booked_j7rj.svg',
          link: '/historico_de_procedimentos'
        },
        {
          title: 'Indicações e Créditos',
          svg: './../assets/illustrations/undraw_Booked_j7rj.svg',
          link: '/indicacoes_e_creditos'
        },
        {
          title: 'Troca de Pontos',
          svg: 'undraw_Booked_j7rj',
          link: '/troca_de_pontos'
        },
        {
          title: 'Dados Cadastrais',
          svg: 'undraw_Booked_j7rj',
          link: '/dados_cadastrais'
        },
        {
          title: 'Desenvolvedora do Projeto',
          svg: 'undraw_Booked_j7rj',
          link: '/desenvolvedora_do_projeto'
        }
      ]
    }
  }
}
</script>
<style>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 500px;
  height: 200px;
  border-radius: 5px;

}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
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
