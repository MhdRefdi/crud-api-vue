<template>
  <div class="my-3 container">
    <input
      type="text"
      :value="modelValue.user"
      @input="update($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputData",
  props: {
    modelValue: {
      type: String,
    },
  },
  methods: {
    update(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>