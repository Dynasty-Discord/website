<template>
  <main class="grid grid-cols-5">
    <DocsSideBar class="col-span-1" />
    <div class="document col-span-4 w-full max-w-[800px] my-8">
      <ContentDoc />
    </div>
  </main>
</template>
<style scoped>
.document :deep(pre) {
  @apply bg-gray-800 text-white p-4 my-2 rounded flex-wrap overflow-x-auto;
}

.document :deep(h1) {
  @apply text-3xl font-bold my-4;
}

.document :deep(h2) {
  @apply text-2xl font-bold my-3;
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
  @apply text-sm font-bold my-2;
}

.document :deep(a) {
  @apply text-blue-500;
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
  @apply border-l-4 border-gray-800 bg-gray-900 text-white p-2 my-2;
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
