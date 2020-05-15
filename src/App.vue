
<template>
  <div class="app" ref="app">
    <!-- 头部 -->
    <header>
      <div>天翼奥莱 春熙路营业厅优享店</div>
    </header>
    <!-- 信息部分 -->
    <article>
      <aside>
        <p>早市</p>
        <p>每日11:00开抢</p>
      </aside>
      <img src="../src/assets/sun.png" alt />
    </article>
    <!-- 热门商品部分 -->
    <div class="hot_shop_box">
      <h3>福利天天拿</h3>
      <div>
        <img class="hot_shop" src="../src/assets/hot.png" alt />
        <div class="hot_icon_box">今日爆品</div>
        <div class="_hot_shop">
          <h4>蒙牛特仑苏 全脂早餐奶 250mlX12盒</h4>
          <ul class="present">
            <li>100% 生牛乳</li>
            <li>120mg乳钙</li>
            <li>3.6g蛋白质/100ml</li>
          </ul>
          <!-- 热门商品 -->
          <div class="shopMS">
            <img src="../src/assets/shop1.png" alt />
            <div>
              <p>
                <strong>￥</strong>
                <strong>39</strong>
                <strong>.9</strong>
                <del>￥59.9</del>
              </p>
              <div class="ticket">
                <div>
                  <p>20元</p>
                  <p>天翼奥莱专享券</p>
                </div>
                <div>马上抢</div>
              </div>
              <div class="progress">
                <div>
                  <div>83%</div>
                </div>
                <p>仅剩26件</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="shop_list" v-for="(item,index) in shopList" :key="index">
      <div>
        <img :src="item.img" alt />
        <strong v-if="item.hot">今日热卖</strong>
      </div>
      <div>
        <h4>[洽洽] 腰果辣烤味40g*2袋</h4>
        <ul class="shop" :class="item.hot?'':'noHotShop'">
          <li v-for="k in item.introduce" :key="k">{{k}}</li>
        </ul>
        <ul class="ticket">
          <li>淘宝优惠券 {{item.discounts}}</li>
          <li>已抢{{item.sell}}张</li>
        </ul>
        <ul class="parse">
          <li>
            <span class="icon">￥</span>
            <span class="parse">{{item.price}}</span>
            <del>￥{{item.oldPrice}}</del>
          </li>
          <li>马上抢</li>
        </ul>
      </div>
    </div>
    <!-- 中间图片 -->
    <img src="@/assets/middle_img.png" class="middle_img" alt />
    <!-- 好货天天抢 -->
    <div class="goodShopBox">
      <h2>好货天天抢</h2>
      <ul class="nav" ref="nav" :style="isScrollTop?scrollTopGoodShopBox:''">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="navIndex==index?'active':''"
          @click="clickNav(index)"
        >
          <img :src="navIndex==index?item.img:item._img" alt />
          <p>{{item.text}}</p>
        </li>
      </ul>
      <!-- 商品列表 -->
      <component :is="navComponent[navIndex]"></component>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    hotShop: require("./components/hotShop").default,
    foot: require("./components/foot").default,
    store: require("./components/store").default,
    wash: require("./components/wash").default
  },
  data() {
    //这里存放数据
    return {
      // 商品列表
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
        }
      ],
      navIndex: 0, //nav索引值
      // nav列表
      navList: [
        {
          _img: require("@/assets/_foot.png"),
          img: require("@/assets/foot.png"),
          text: "食品"
        },
        {
          _img: require("@/assets/_store.png"),
          img: require("@/assets/store.png"),
          text: "百货"
        },
        {
          _img: require("@/assets/_wash.png"),
          img: require("@/assets/wash.png"),
          text: "洗护"
        },
        {
          _img: require("@/assets/_hotShop.png"),
          img: require("@/assets/hotShop.png"),
          text: "热销榜"
        }
      ],
      navComponent: ["foot", "store", "wash", "hotShop"],
      isScrollTop: false,
      scrollTopGoodShopBox: {
        width: "90vw",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        "z-index": 999
      }
    };
  },
  //方法集合
  methods: {
    clickNav(index) {
      this.navIndex = index;
    }
  },
  mounted() {
    let nav = this.$refs["nav"];
    let scrollTop = parseInt(nav.getBoundingClientRect().top);
    window.onscroll = () => {
      let app = this.$refs["app"];
      let pageHeight = app.offsetHeight;
      let Y = parseInt(pageYOffset);
      this.isScrollTop = Boolean(Y + 30 >= scrollTop);
      let loadMore = pageHeight - Y - window.innerHeight;
      if (loadMore < 100) {
        this.$store.commit("getMore",this.shopList);
      }
    };
  }
};
</script>
<style lang='less' scoped>
@import "../css/index.less";
</style>