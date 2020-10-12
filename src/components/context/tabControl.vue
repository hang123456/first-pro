<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="active"
      :class="{ isactive: curretIndex === index }"
      @click="tabclick(index)"
    >
      <span> {{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      curretIndex: 0,
    };
  },
  methods: {
    tabclick(index) {
      this.curretIndex = index;
      this.$emit("tabarNum", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 15px;
}
.isactive {
  color: red;
}
.active {
  flex: 1;
}
.isactive span {
  padding-bottom: 10px;
  border-bottom: 1px solid red;
}
</style>