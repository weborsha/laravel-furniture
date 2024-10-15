<template>
  <form @submit.prevent="handleSubmit">
    <h1>Add New Furniture</h1>
    <label>
      Name:
      <input type="text" v-model="formData.name" required />
    </label>
    <label>
      Description:
      <textarea v-model="formData.description" required></textarea>
    </label>
    <label>
      Price:
      <input type="number" v-model="formData.price" required />
    </label>
    <label>
      In Stock:
      <input type="checkbox" v-model="formData.in_stock" />
    </label>
    <button type="submit">Add Furniture</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        description: '',
        price: '',
        in_stock: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$http.post('${process.env.VUE_APP_API_BASE_URL}/furniture', this.formData)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Error adding furniture:', error);
          });
    },
  },
};
</script>
