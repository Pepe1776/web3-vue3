<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCryptoStore } from '~/stores/crypto'
const messageInput = ref(null as any)
const cryptoStore = useCryptoStore()
const { wave, connectWallet } = useCryptoStore()
const { account, guestPosts, guestPostsCount } = storeToRefs(cryptoStore)
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl m-4">
      JParker's Crypto Guest Book
    </h1>
    <button v-if="!account" class="dark:bg-cyan-900 bg-teal-300 rounded p-4" @click="connectWallet">
      Connect Wallet
    </button>
    <div v-if="account" class="mt-5">
      <input
        v-model="messageInput"
        name="guestBookInfo"
        class="py-4 px-4 dark:text-black  shadow border rounded"
        maxlength="20"
      >
      <button class="dark:hover:bg-cyan-700 hover-bg-teal-100 dark:bg-cyan-900 bg-teal-200 rounded p-4 mt-10" @click="wave(messageInput)">
        Send
      </button>
    </div>

    <div v-if="account" class="dark:bg-cyan-900 bg-teal-300 border shadow  w-4/12 p-4 mt-10 rounded-xl">
      <h3 class="text-2xl">
        Number Of Entries: {{ guestPostsCount }}
      </h3>
      <div v-for="(guestPost, idx) in guestPosts" :key="idx" class="flex flex-col  m-auto " :class="{'mt-4': idx > 1}">
        <div v-if="guestPost.message" class="flex justify-between w-full">
          <span class="font-semibold">{{ guestPost.timestamp }}</span>
          <span>{{ guestPost.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
