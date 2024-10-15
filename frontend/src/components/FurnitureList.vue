<template>
  <div>
    <h1>Furniture List</h1>
    <ul>
      <li v-for="item in furniture" :key="item.id">
        <router-link :to="'/furniture/' + item.id">{{ item.name }}</router-link>
      </li>
    </ul>
    <router-link to="/add-furniture">Add New Furniture</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      furniture: [],
    };
  },
  created() {
    const apiUrl = process.env.VUE_APP_API_BASE_URL;
    this.$http.get(`${apiUrl}/furniture`)
        .then(response => {
          this.furniture = response.data;
        })
        .catch(error => {
          console.error('Error fetching furniture:', error);
        });
  },
};
</script>
