<script setup>
import { ref } from "vue";

const hasContact = ref(true);
</script>
<template>
  <div v-if="hasContact">
     
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe style="filter: grayscale(1) contrast(1.2) opacity(0.4);" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" height="100%" frameborder="0"></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
     
    </div>
  <div
    v-if="!hasContact"
    class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg"
  >
    <div class="flex flex-col justify-center">
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
          Lets talk about everything!
        </h2>
        <div class="text-gray-700 mt-8">
          Hate forms? Send us an&nbsp;
          <a class="underline" href="mailto:someone@gmail.com"> email </a>
          instead.
        </div>
      </div>
      <div class="mt-12 text-center">
        <img src="https://dummyimage.com/500x300" alt="Contact" />
      </div>
    </div>
    <form>
      <div>
        <span class="uppercase text-sm text-gray-600 font-bold">
          Full Name
        </span>
        <input
          class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Enter your Name"
          required
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-gray-600 font-bold"> Email </span>
        <input
          class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-gray-600 font-bold">
          Phone Number
        </span>
        <input
          class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
          type="phone"
          placeholder="Enter your Phone Number including country code"
          required
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-gray-600 font-bold"> Message </span>
        <textarea
          class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your Message"
          required
        ></textarea>
      </div>
      <div class="mt-8">
        <button
          class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>
<script setup></script>
<style></style>
