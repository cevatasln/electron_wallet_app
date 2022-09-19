<script>
import { defineComponent } from "vue";
import rightmenuVue from "../components/rightmenu.vue";
export default defineComponent({
  name: "RightMenu",
  inject: ["irender"],
  components: {
    rightmenuVue,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {},
  methods: {},
});
</script>

<template>
  <div class="page-cont">
    <div class="page-inner">
      <div class="page-right">
        <rightmenuVue />
      </div>
      <div class="page-content">hello</div>
    </div>
  </div>
</template>
