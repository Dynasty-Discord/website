<script setup lang="ts">
const content = await queryContent(useRoute().fullPath.split("#")[0]).findOne();
const title = content.title;
const description = content.description;
</script>

<template>
  <main class="flex items-center justify-center">
    <div class="grid grid-cols-8 p-4 gap-4 max-w-[1200px] w-full">
      <DocsSideBar class="col-span-2" />
      <div class="document col-span-6 w-full max-w-[800px]">
        <h1 class="text-4xl font-bold text-white">{{ title }}</h1>
        <p class="text-gray-400">{{ description }}</p>
        <ContentDoc />
      </div>
    </div>
  </main>
</template>
<style scoped>
.document :deep(pre) {
  @apply bg-zinc-800 text-white p-4 my-2 rounded flex-wrap overflow-x-auto;
}

.document :deep(a) {
  @apply text-orange-400 hover:underline transition-all duration-200 ease-in-out;
}

.document :deep(h1) {
  @apply text-3xl font-bold my-4;
}

.document :deep(h2) {
  @apply text-2xl font-bold my-3 text-white;
}

.document :deep(h3) {
  @apply text-xl font-bold my-2;
}

.document :deep(h4) {
  @apply text-lg font-bold my-2;
}

.document :deep(h5) {
  @apply text-base font-bold my-2;
}

.document :deep(h6) {
  @apply text-sm font-bold my-2 text-white;
}

.document :deep(ul) {
  @apply list-disc list-inside my-2 mx-2;
}

.document :deep(ol) {
  @apply list-decimal list-inside my-2 mx-2;
}

.document :deep(li) {
  @apply my-1;
}

.document :deep(blockquote) {
  @apply border-l-4 border-zinc-600 bg-zinc-900 text-white p-2 my-2;
}

.document :deep(img) {
  @apply my-4;
}

.document :deep(table) {
  @apply w-full my-4;
}

.document :deep(th) {
  @apply bg-gray-800 text-white p-2;
}

.document :deep(td) {
  @apply bg-gray-700 text-white p-2;
}

.document :deep(hr) {
  @apply my-4 border-t-2 border-gray-800;
}

.document :deep(p) {
  @apply my-2;
}

.document :deep(iframe) {
  @apply my-4;
}

.document :deep(figure) {
  @apply my-4;
}

.document :deep(figcaption) {
  @apply text-sm text-gray-500 text-center;
}
</style>
