<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <User :biodata="biodata" jenkel="laki-laki" class="text-primary"> </User> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import Input from "@/components/Input";
// import User from "@/components/UserComp";

export default {
  name: "App",
  components: {
    Navbar,
    // Input,
    // User,
  },
  data() {
    return {
      biodata: {
        nama: "refdi",
        umur: 27,
      },
      val: "",
    };
  },
};
</script>

<style></style>
