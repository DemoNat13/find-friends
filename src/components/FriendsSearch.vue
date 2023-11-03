<template>
  <div class="bitcoin__currency">
    <h3 class="bitcoin__currency-header">
      Bitcoin Price Index
    </h3>
    <div
      v-for="(currency, index) in bitcoinCurr"
      :key="index"
      class="currency"
    >
      {{ currency.description }}:
      <span>
        {{ currency.rate_float }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FriendsSearch',

  data: () => ({

  }),
  created() {
    this.getBitcoinPrice();
  },
  computed: {
    ...mapState(['bitcoinCurr']),
  },
  methods: {
    ...mapActions(['callSetBitcoinCurr']),
    getBitcoinPrice() {
      this.$http
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          this.callSetBitcoinCurr(response.data.bpi);
        });
    },
  },
};
</script>

<style lang="scss">
.bitcoin__currency {
      display: block;
      background-color:rgba(192, 192, 192, 0.3);
      border-radius: 6px;
      .bitcoin__currency-header {
        text-align: center;
        font-size: 2rem;
      }
      .currency {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
</style>
