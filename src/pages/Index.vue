<template>
  <q-page>
    <div class="event-card max-w-sm rounded overflow-hidden shadow-lg w-full lg:flex items-end">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
          <img
            alt="Quasar logo"
            src="~assets/illustrations/undraw_Booked_j7rj.svg"
          >
      </div>
      <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div class="flex-1 text-gray-900 font-bold text-right text-xl ">
            Agende a sua próxima visita! tete
          </div>
      </div>
    </div>
    <Cards v-for="links in essentialLinks" :key="links.link" :menu="links" />
  </q-page>
</template>

<script>
import Cards from 'src/components/Cards.vue'
export default {
  name: 'PageIndex',
  components: {
    Cards
  },
  data () {
    return {
      essentialLinks: [
        {
          title: 'Agende sua Próxima Visita',
          svg: 'undraw_attached_file_n4wm',
          link: '/sua_proxima_visita'
        },
        {
          title: 'Histórico de Procedimentos',
          svg: 'undraw_Booked_j7rj',
          link: '/historico_de_procedimentos'
        },
        {
          title: 'Indicações e Créditos',
          svg: 'undraw_Booked_j7rj',
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
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
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
</style>
