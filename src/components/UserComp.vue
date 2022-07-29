<template>
  <div>
    <h1>Nama : {{ biodata.nama }}</h1>
    <h1>umur : {{ biodata.umur }}</h1>
    <h1>Jenis Kelamin : {{ jenkel }}</h1>
  </div>
</template>

<script>
export default {
  name: "TestUser",
  props: {
    biodata: {
      type: Object,
      default: () => {},
    },
    jenkel: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>