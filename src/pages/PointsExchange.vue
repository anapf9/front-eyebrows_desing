<template>
<div>
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Produtos" label="Produtos" />
          <q-tab name="Serviços" label="Serviços" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Produtos">
            <div class="text-h6">Produtos</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div class="row">
              <cards v-for="(product, i) in products" :key="i" :values="product" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="Serviços">
            <div class="text-h6">Serviços</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div class="row">
              <cards v-for="(service, i) in services" :key="i" :values="service" />
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
</div>

</template>

<script>
import Cards from './../components/CardsProductsAndServices'
export default {
  name: 'Points Exchange',
  components: {
    Cards
  },
  data () {
    return {
      tab: 'Produtos',
      products: [
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        }
      ],
      services: [
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        },
        {
          img: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: 'Teste 1',
          description: 'Descrição 1',
          cost: '500'
        }
      ]
    }
  }
}
</script>

<style>

</style>
