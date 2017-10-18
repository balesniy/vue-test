<template>
    <tr>
        <td v-for="(value, key) in data"><input :value="value" @input="onUpdate(key, $event.target.value)"/></td>
        <button @click="onDelete">X</button>
    </tr>
</template>

<script>
  export default {
    name: "item-row",
    props: ["data"],
    methods: {
      onUpdate(key, value) {
        this.$emit("update:data", Object.assign({}, this.data, { [key]: value }));
      },
      onDelete() {
        this.$emit("delete", this.data);
      }
    },
  }
</script>

<style scoped>

</style>