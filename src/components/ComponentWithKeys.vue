<template>
  <div>
    <div class="items">
      <Item
          v-for="count in 10"
          :key="`key-${count}`"
          :count="count"
      />
    </div>
    <div class="divs">
      <div
          class="div-item"
          v-for="count in 10"
          :key="`key-${count}`"
      >
        {{ count }}
      </div>
    </div>
  </div>

</template>

<script>
import Item from '@/components/Item'
export default {
  name: 'ComponentWithKeys',
  components: { Item }
}
</script>
