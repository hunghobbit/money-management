<template>
    <section class="p-6 bg-white w-full h-50 m-0 mx-auto">
        <section class="w-full flex justify-between items-center max-sm:flex-col gap-y-4  sm:gap-x-2">
            <div class="bg-green-500 text-white p-10 w-full rounded-lg shadow-md">
                <h2>This Month Income</h2>
                <h2>$ 0.00</h2>
            </div>
            <div class="bg-red-500 text-white p-10 w-full rounded-lg shadow-md">
                <h2>This Month Outcome</h2>
                <h2>$ 0.00</h2>
            </div>
        </section>         
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                <p class="leading-relaxed">Wallets</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                <p class="leading-relaxed">Transactions</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
            <canvas id="chart"></canvas>
        </section>
    </section>
</template>
