<template>
  <div class="page-wrapper">
    <v-card color="taro">
      <v-card-title>Total Responses: {{ products.length }} </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-desc
      sort-by="createTimestamp"
      :items-per-page="500"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
// import ProductItem from '@/components/ProductItem'
// import { mapState, mapActions, mapGetters } from 'vuex'
import SummerFormDB from '@/firebase/SummerFormDB'

export default {
  // components: { ProductItem },

  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Email', value: 'email' },
        { text: 'Discord', value: 'discord' },
        { text: 'Drink', value: 'drink' },
        { text: 'Experience', value: 'experienceType' },
        { text: 'TA', value: 'isTA' },
        { text: 'Availablity', value: 'availablity' },
        { text: 'Time', value: 'availablityTime' },

        { text: 'Interest', value: 'interest' },
        { text: 'Summer Project', value: 'selectedInterestSummer' }
      ],
      products: []
    }
  },

  mounted() {
    this.getData()
  },
  // computed: {
  //   ...mapGetters('products', ['isProductDeletionPending']),
  //   ...mapState('products', ['products']),
  //   ...mapState('app', ['networkOnLine'])
  // },
  // methods: mapActions('products', ['deleteUserProduct'])

  methods: {
    async getData() {
      const db = new SummerFormDB()
      this.products = await db.readAll()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.product-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
