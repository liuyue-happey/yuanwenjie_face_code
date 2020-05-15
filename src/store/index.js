import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList: [
      {
        img: require("@/assets/shop1.png"),
        hot: false,
        title: "[洽洽] 腰果辣烤味40g*2袋",
        price: "17.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["大果仁", "越南特产"]
      },
      {
        img: require("@/assets/shop2.png"),
        hot: true,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "21.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop3.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "23.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop4.png"),
        hot: true,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "32.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop5.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop6.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop7.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop8.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop9.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      }
    ],
    addShop: [
      {
        img: require("@/assets/shop1.png"),
        hot: false,
        title: "[洽洽] 腰果辣烤味40g*2袋",
        price: "17.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["大果仁", "越南特产"]
      },
      {
        img: require("@/assets/shop2.png"),
        hot: true,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "21.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop3.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "23.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop4.png"),
        hot: true,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "32.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
      {
        img: require("@/assets/shop5.png"),
        hot: false,
        title: "莆田特产桂圆干1斤装*2袋",
        price: "44.9",
        oldPrice: "22.9",
        discounts: "5元",
        sell: "999",
        introduce: ["买一赠一", "肉质鲜嫩"]
      },
    ],
  },
  mutations: {
    getMore(state,data) {
      state.shopList.push(...data)
    }
  },
  actions: {
  },
  modules: {
  }
})
