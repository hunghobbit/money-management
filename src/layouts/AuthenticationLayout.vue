<template>
  <div class="authentication-background bg-slate-300 p-2 m-0 mx-auto">
    <div class="p-5 my-12 rounded-xl shadow-lg sm:w-1/12 max-sm:w-1/3 m-0 mx-auto">
      <img src="https://vitejs.dev/logo-with-shadow.png" alt="logo"/>
    </div>
    <div class="p-5 my-12 bg-white rounded-xl shadow-lg lg:w-5/12 md:w-5/6 m-0 mx-auto">
        
      <slot />
    </div>
  </div>
</template>

<style>
.authentication-background {
  min-height: 100vh;
  background-image: none;
  background-size: cover;
  background-position: center;
  background: linear-gradient(
      rgba(162, 138, 250, 0.5),
      rgba(5, 83, 172, 0.5),
      rgba(69, 5, 172, 0.5)
    );
  background-repeat: no-repeat;
}
</style>
