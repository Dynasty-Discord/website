<script setup lang="ts">
const links = await fetchContentNavigation({
  find: {
    $or: [{ $path: "/docs" }],
  },
});
console.log("links", links);
</script>
<template>
  <!-- Fait moi une navbar -->
  <nav>
    <ul>
      <li v-for="item in links">
        <DocsRecursiveNavigation :link="item" />
      </li>
    </ul>
  </nav>
</template>
