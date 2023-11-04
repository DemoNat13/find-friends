<template>
  <!-- <div class="bitcoin__currency">
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
  </div> -->
  <!-- <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-input
          :messages="['Messages']"
        >
          Default Slot
        </v-input>
      </v-col>
    </v-row>
  </v-container> -->
  <div class="search">
    <v-card
      class="search__card"
      max-width="300"
      tile
    >
      <v-list
        class="search__list"
        shaped
      >
        <v-subheader
          class="list__header"
        >
          Исходный
        </v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(friend, i) in friends"
            :key="i"
          >
            <v-list-item-icon>
              <v-avatar
                size="36px"
              >
                <img
                  v-if="friend.photo"
                  :src="friend.photo"
                  alt="Avatar"
                >
                <v-icon
                  v-else
                >
                  mdi-account
                </v-icon>
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{friend.name}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div class="search__input">
      <label
        class="search__input-label"
        for="search"
      >
        Search your friends
        <input
          class="search__input-block"
          placeholder="Start typing..."
          type="text"
          id="search"
        />
      </label>
    </div>
    <v-card
      class="search__card"
      max-width="300"
      tile
    >
      <v-list
        class="search__list"
        shaped
      >
        <v-subheader
          class="list__header"
        >
          Друзья
        </v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(friend, i) in friends"
            :key="i"
          >
            <v-list-item-icon>
              <v-avatar
                size="36px"
              >
                <img
                  v-if="friend.photo"
                  :src="friend.photo"
                  alt="Avatar"
                >
                <v-icon
                  v-else
                >
                  mdi-account
                </v-icon>
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{friend.name}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FriendsSearch',

  data: () => ({
    selectedItem: 1,
    friends: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
    text: '',
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

<style lang="scss" scoped>
  * {
      font-size: 16px;
  }
      *:focus {
      outline:none;
    }
  // .friends-search__input {
  //   display: flex;
  //   flex-direction: column;
  // }
  .search {
    display: flex;
    column-gap: 100px ;
    justify-content: space-around;
    .list__header {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .search__input-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .search__input-block {
    padding: 10px;
    border: 2px solid #636760;
    border-radius: 5px;
    transition: 0.3s all;
    &:hover {
      border-color: #dfcbd2;
    }
    &:focus {
      border-color: #dfcbd2;
    }
  }
.bitcoin__currency {
      display: block;
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
