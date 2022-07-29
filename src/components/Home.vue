<template>
  <div class="container mt-3">
    <p class="h1 text-center">Data Siswa Rpl</p>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Judul</th>
          <th scope="col">Keterangan Projek</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in datas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.title }}</td>
          <td>{{ data.completed ? "Sudah Selesai" : "Belum Selesai" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteData(data.id)"
            >
              Hapus
            </button>
            |
            <router-link :to="'/detail/' + data.id" class="btn btn-warning"
              >Detail</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => (this.datas = response.data));
    },
    deleteData(id) {
      this.getData();
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(console.log("berhasil"));
    },
  },
  data() {
    return {
      datas: null,
    };
  },
  mounted() {
    this.getData();
  },
};
</script>
