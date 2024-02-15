<template>
  <div>
    <div v-for="(course, index) in courses" :key="index">
      <div class="grid grid-cols-2 border p-10 mb-4 items-center">
        <div>
          <span>{{ course.title }} - {{ course.price }}</span>
        </div>
        <div class="flex justify-around">
          <div>
            <Button
              @click="
                () => {
                  addToCart(course);
                }
              "
              >{{ alreadyInCart(course) ? "In Cart" : "Add to cart" }}</Button
            >
          </div>
          <div>
            <Button
              class="ml-4"
              @click="
                () => {
                  removeFromCart(course);
                }
              "
              >{{
                alreadyInCart(course) ? "Remove From Cart" : "Not in Cart"
              }}</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="p-10 border-t-2">
      <Button @click="toggleCart">Show cart</Button>
    </div>

    <!-- Cart display section -->
    <div v-if="showCart">
      <div v-if="cartStore.cart.length" class="p-10 border-t-2">
        <h2>Your Cart</h2>
        <div v-for="(item, index) in cartStore.cart" :key="index">
          {{ item.title }} - {{ item.price }} - Quantity: {{ item.quantity }}
        </div>
      </div>
      <div v-else class="p-10 border-t-2">
        <p>No items in the cart</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = ref([
  {
    id: "itm1",
    price: "65.00",
    quantity: 0,
    title: "Animation",
  },
  {
    id: "itm2",
    price: "52.00",
    quantity: 0,
    title: "Design",
  },
  {
    id: "itm3",
    price: "76.00",
    quantity: 0,
    title: "Photography",
  },
  {
    id: "itm4",
    price: "84.00",
    quantity: 0,
    title: "Crypto",
  },
]);

import { useCartStore } from "../store/cart";
const cartStore = useCartStore();

const alreadyInCart = (course) => {
  const x = cartStore.cart?.find((el) => el.id === course.id);
  if (x?.id) {
    return true;
  } else {
    return false;
  }
};

const addToCart = (course) => {
  if (!alreadyInCart(course)) {
    cartStore.addToCart(course);
  } else {
    alert(`${course.title} already in cart`);
  }
};

const removeFromCart = (course) => {
  cartStore.removeFromCart(course);
};

const showCart = ref(false);

const toggleCart = () => {
  showCart.value = !showCart.value;
};
</script>
