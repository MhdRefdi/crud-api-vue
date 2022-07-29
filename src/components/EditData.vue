<template>
  <div class="container">
    <p class="h1 text-center">Edit Data Siswa</p>
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="editData()">
          <div class="mb-3">
            <label class="form-label">User Id</label>
            <input type="number" class="form-control" v-model="datas.userId" />
          </div>
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" v-model="datas.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Project Desc</label>
            <select class="form-control" v-model="datas.completed">
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
  name: "EditPage",
  methods: {
    editData() {
      axios
        .put(
          "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id,
          {
            userId: this.datas.userId,
            title: this.datas.title,
            completed: this.datas.completed,
          }
        )
        .then(() => {
          this.$router.push({ path: "/" });
          // console.log("berhasil");
        })
        .catch((err) => {
          console.error(err);
          alert("Gagal menyimpan data");
        });
    },
  },
  data() {
    return {
      datas: {},
    };
  },
  mounted() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
      )
      .then((response) => {
        this.datas = response.data;
      });
  },
};
</script>
<style></style>
