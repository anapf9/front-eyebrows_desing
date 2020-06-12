<template>
  <q-layout view="lHh Lpr lFf">
    <q-header color="pink-4" elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link class="event-link" :to="{ name: 'home' }">
          Dayci Sobrancelhas
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class=""
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Agende sua Próxima Visita',
          icon: 'school',
          link: '/sua_proxima_visita'
        },
        {
          title: 'Histórico de Procedimentos',
          icon: 'code',
          link: '/historico_de_procedimentos'
        },
        {
          title: 'Indicações e Créditos',
          icon: 'chat',
          link: '/indicacoes_e_creditos'
        },
        {
          title: 'Troca de Pontos',
          icon: 'record_voice_over',
          link: '/troca_de_pontos'
        },
        {
          title: 'Dados Cadastrais',
          icon: 'rss_feed',
          link: '/dados_cadastrais'
        },
        {
          title: 'Desenvolvedora do Projeto',
          icon: 'public',
          link: '/desenvolvedora_do_projeto'
        }
      ]
    }
  }
}
</script>
