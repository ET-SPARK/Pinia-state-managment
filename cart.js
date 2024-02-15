import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [],
    };
  },

  actions: {
    addToCart(course) {
      this.cart.push({ ...course, quantity: 1 });
    },
    removeFromCart(course) {
      const index = this.cart.findIndex((el) => el.id === course.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
