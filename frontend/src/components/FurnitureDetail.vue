<template>
  <div v-if="furniture">
    <h1>{{ furniture.name }}</h1>
    <p>{{ furniture.description }}</p>
    <p>Price: ${{ furniture.price }}</p>
    <p>In Stock: {{ furniture.in_stock ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      furniture: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$http.get(`${process.env.VUE_APP_API_BASE_URL}/furniture/${id}`)
        .then(response => {
          this.furniture = response.data;
        })
        .catch(error => {
          console.error('Error fetching furniture:', error);
        });
  },
};
</script>
