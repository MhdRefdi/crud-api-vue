<template>
  <div class="container">
    <div class="card mt-4" v-if="this.datas">
      <div class="card-body">
        <h5 class="card-title">Judul : {{ this.datas.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Keterangan Project</h6>
        <p class="card-text" v-if="datas.completed === true">Sudah Selesai</p>
        <p class="card-text" v-if="datas.completed === false">Belum Selesai</p>
        <button
          class="btn btn-primary"
          type="button"
          disabled
          v-if="this.isLoading === true"
        >
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
        <router-link
          to="/"
          class="btn btn-primary"
          v-if="this.isLoading === false"
          >Back</router-link
        >
        |
        <router-link :to="'/edit/' + datas.id" class="btn btn-warning"
          >Edit</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailPage",
  methods: {
    getData() {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
        )
        .then((response) => {
          this.datas = response.data;
          this.isLoading = false;
        });
    },
  },

  data() {
    return {
      datas: null,
      isLoading: true,
    };
  },
  mounted() {
    this.getData();
  },
};
</script>
