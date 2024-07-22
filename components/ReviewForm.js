app.component('review-form', {
    template: `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>

      <label for="name">Name:</label>
      <input type="text" name="name" id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea name="review" id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select name="rating" id="rating" v-model.number="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      
      <label for="recommended">Would you recommend this product?</label>
      <select name="recommended" id="recommended" v-model="recommended">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <button type="submit" class="button">Submit</button>
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommended === null) {
                alert('Review is incomplete. Please fill out every field.')
                return;
            }

            const productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommended = null
        }
    }
})