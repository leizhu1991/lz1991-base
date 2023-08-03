<template>
  <inline-svg
    :src="src"
    :width="width"
    :height="height"
    :fill="color"
  />
</template>

<script lang="ts" setup>
import InlineSvg from 'vue-inline-svg';

interface IconProps {
  src: string,
  width: number,
  height: number,
  color?: string,
}

withDefaults(defineProps<IconProps>(), {
  width: 24,
  height: 24,
});

</script>
