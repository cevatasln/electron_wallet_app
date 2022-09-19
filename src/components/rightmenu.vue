<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "RightMenu",
  inject: ["irender"],
  components: {
    RouterLink,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getAccountList();
  },
  methods: {
    async getAccountList() {
      this.list = await this.irender.invoke("accounts");
    },
  },
});
</script>

<template>
  <div class="rightmenu-cont">
    <div class="rightmenu-inner">
      <ul class="rightmenu-nav">
        <li v-for="(item, i) in list" :key="`list${i}`">
          <RouterLink :to="`/account?id=${item.id}`">
            <span class="color" :style="{ backgroundColor: item.color }"></span>
            <span class="textdata">
              <span class="title-description">
                <span class="title">{{ item.title }}</span>
                <span class="description">{{ item.description }}</span>
              </span>
              <span class="currency">{{ item.currency }}</span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.rightmenu-nav {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
}
.rightmenu-nav a {
  display: flex;
}
.rightmenu-nav a span {
  display: block;
}
.rightmenu-nav a .color {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.rightmenu-nav a .textdata {
  display: flex;
  justify-content: space-between;
}
.rightmenu-nav a .textdata .title {
  font-size: 18px;
  font-weight: 700;
}
</style>
