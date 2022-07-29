<template>
  <div class="container">
    <p class="h1 text-center">Tambah Data Siswa</p>
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="tambahData()">
          <div class="mb-3">
            <label class="form-label">User Id</label>
            <input
              type="number"
              class="form-control"
              v-model="inputData.userId"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" v-model="inputData.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Project Desc</label>
            <select class="form-control" v-model="inputData.completed">
              <option :value="true">Sudah Selesai</option>
              <option :value="false">Belum Selesai</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MasterData",
  data() {
    return {
      inputData: {
        userId: null,
        title: "",
        completed: "",
      },
    };
  },
  methods: {
    tambahData() {
      axios
        .post("https://jsonplaceholder.typicode.com/todos/", this.inputData)
        .then(() => console.log("berhasil"));
      this.inputData = {
        userId: null,
        title: "",
        completed: "",
      };
    },
  },
};
</script>
