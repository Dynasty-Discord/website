<script setup lang="ts">
const links = await fetchContentNavigation({
  find: {
    $or: [{ $path: "/docs" }],
  },
});

const link = ref(links[0]);
</script>
<template>
  <nav>
    <ul>
      <UAccordion :items="link.children" :ui="{ wrapper: 'flex flex-col w-full' }">
        <template #item="{ item }">
          <div v-for="child in item.children" class="text-gray-900 dark:text-white mx-4 p-2">
            <NuxtLink class="hover:text-orange-500" :to="child._path">{{ child.title }}</NuxtLink>
          </div>
        </template>
        <template #default="{ item, index, open }">
          <UButton
            color="orange"
            variant="ghost"
            class="border-b border-gray-200 dark:border-gray-700"
            :ui="{
              rounded: 'rounded-none',
              padding: { sm: 'p-3' },
            }"
          >
            <span class="truncate">{{ index + 1 }}. {{ item.title }}</span>

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>
    </ul>
  </nav>
</template>
