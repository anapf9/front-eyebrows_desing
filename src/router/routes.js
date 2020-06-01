
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/sua_proxima_visita', name: 'next-visit', component: () => import('pages/NextVisit.vue') },
      { path: '/historico_de_procedimentos', name: 'history-procedure', component: () => import('pages/HistoryProcedure.vue') },
      { path: '/indicacoes_e_creditos', name: 'credits-and-indications', component: () => import('pages/CreditsAndIndications.vue') },
      { path: '/troca_de_pontos', name: 'points-exchange', component: () => import('pages/PointsExchange.vue') },
      { path: '/dados_cadastrais', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: '/desenvolvedora_do_projeto', name: 'developer', component: () => import('pages/Developer.vue') }
    ]
  }
  // {
  //   path: '/sua_proxima_visita',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/NextVisit.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
