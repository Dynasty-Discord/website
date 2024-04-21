<script setup lang="ts">
import type { NavItem } from "@nuxt/content/types";
defineProps<{ link: NavItem }>();
</script>

<template>
  <li>
    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
    <ul v-if="link.children">
      <DocsRecursiveNavigation class="ml-4" v-for="child in link.children" :key="child._path" :link="child" />
    </ul>
  </li>
</template>
