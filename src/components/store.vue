<!-- 百货 -->
<template>
  <div class="store">
    <div class="shop_list _bottom" v-for="(item,index) in shopList" :key="index">
      <div>
        <img :src="item.img" alt />
        <strong v-if="item.hot">即将售罄</strong>
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
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 商品列表
      shopList: [
        {
          img: require("@/assets/shop5.png"),
          hot: false,
          title: "[洽洽] 腰果辣烤味40g*2袋",
          price: "17.9",
          oldPrice: "22.9",
          discounts: "5元",
          sell: "999",
          introduce: ["大果仁", "越南特产"]
        },
        {
          img: require("@/assets/shop7.png"),
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
          img: require("@/assets/shop1.png"),
          hot: true,
          title: "莆田特产桂圆干1斤装*2袋",
          price: "32.9",
          oldPrice: "22.9",
          discounts: "5元",
          sell: "999",
          introduce: ["买一赠一", "肉质鲜嫩"]
        },
        {
          img: require("@/assets/shop4.png"),
          hot: false,
          title: "莆田特产桂圆干1斤装*2袋",
          price: "44.9",
          oldPrice: "22.9",
          discounts: "5元",
          sell: "999",
          introduce: ["买一赠一", "肉质鲜嫩"]
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import "../../css/index.less";
</style>