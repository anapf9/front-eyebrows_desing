<template>
  <q-layout view="lHh Lpr lFf" style="background: url()">
    <q-header color="pink-4" elevated style="background-color: #671454;">
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
          <router-link class="event-link text-white" :to="{ name: 'home' }">
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
    <q-img height="160px" style="background-color: #671454; color: #fff;">
      <div class="q-ma-xs fit bg-transparent">
        <div class="text-weight-regular"> Seja Bem Vinda,</div>
        <div class="text-weight-bold text-h6"> {{ user }}</div>
        <div>Você possui:</div>
          <div class="q-gutter-sm ">
            <q-btn no-caps style="background-color: #8e1166" text-color="white">
              234 <br> pontos
            </q-btn>
            <q-btn no-caps style="background-color: #8e1166" text-color="white">
              234 <br> créditos
            </q-btn>
          </div>
      </div>
    </q-img>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Área vip do Cliente
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="background-color: #fff2f2" >
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
      user: 'Dayci Oliveira',
      essentialLinks: [
        {
          title: 'Agende sua Próxima Visita',
          icon: 'calendar_today',
          link: '/sua_proxima_visita'
        },
        {
          title: 'Histórico de Procedimentos',
          icon: 'assignment',
          link: '/historico_de_procedimentos'
        },
        {
          title: 'Indicações e Créditos',
          icon: 'record_voice_over',
          link: '/indicacoes_e_creditos'
        },
        {
          title: 'Troca de Pontos',
          icon: 'add_shopping_cart',
          link: '/troca_de_pontos'
        },
        {
          title: 'Dados Cadastrais',
          icon: 'account_circle',
          link: '/dados_cadastrais'
        },
        {
          title: 'Desenvolvedora do Projeto',
          icon: 'code',
          link: '/desenvolvedora_do_projeto'
        }
      ]
    }
  }
}
</script>
