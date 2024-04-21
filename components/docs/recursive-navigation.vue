<script setup lang="ts">
import type { NavItem } from "@nuxt/content/types";

const props = defineProps<{ link: NavItem }>();

const title = props.link.title.charAt(0) + props.link.title.toLowerCase().substring(1);
</script>

<template>
  <li>
    <NuxtLink :to="link._path">{{ title }}</NuxtLink>
    <ul v-if="link.children">
      <DocsRecursiveNavigation class="ml-4" v-for="child in link.children" :key="child._path" :link="child" />
    </ul>
  </li>
</template>
