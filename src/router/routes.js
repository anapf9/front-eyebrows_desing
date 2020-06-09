import Home from 'pages/Index'
import MainLayout from 'layouts/MainLayout'
import NextVisit from 'pages/NextVisit'
import HistoryProcedure from 'pages/HistoryProcedure'
import CreditsAndIndications from 'pages/CreditsAndIndications'
import PointsExchange from 'pages/PointsExchange'
import Profile from 'pages/Profile'
import Developer from 'pages/Developer'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'home', name: 'home', component: Home },
      { path: 'sua_proxima_visita', name: 'next-visit', component: NextVisit },
      { path: 'historico_de_procedimentos', name: 'history-procedure', component: HistoryProcedure },
      { path: 'indicacoes_e_creditos', name: 'credits-and-indications', component: CreditsAndIndications },
      { path: 'troca_de_pontos', name: 'points-exchange', component: PointsExchange },
      { path: 'dados_cadastrais', name: 'profile', component: Profile },
      { path: 'desenvolvedora', name: 'developer', component: Developer }
    ]
    /* path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/sua_proxima_visita', name: 'next-visit', component: () => import('pages/NextVisit.vue') },
      { path: '/historico_de_procedimentos', name: 'history-procedure', component: () => import('pages/HistoryProcedure.vue') },
      { path: '/indicacoes_e_creditos', name: 'credits-and-indications', component: () => import('pages/CreditsAndIndications.vue') },
      { path: '/troca_de_pontos', name: 'points-exchange', component: () => import('pages/PointsExchange.vue') },
      { path: '/dados_cadastrais', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: '/desenvolvedora_do_projeto', name: 'developer', component: () => import('pages/Developer.vue') }
    ] */
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
