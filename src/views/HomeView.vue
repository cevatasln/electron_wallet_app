<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "HomeView",
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
      this.list = await this.irender.invoke("accounts", [1, 2, 3]);
      console.log(this.list);
    },
  },
});
</script>

<template>
  <h2>home</h2>
  <pre> {{ list }} </pre>
  <ul>
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
</template>
