<template>
  <div
    class="icon-button"
    :class="classes"
    :style="style"
    v-bind="attrs"
  >
    <Icon
      class="icon-button__icon"
      :src="icon"
      :width="iconSize"
      :height="iconSize"
      :color="iconColor"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import Icon from './Icon.vue';

interface IconProps {
  icon: string,
  iconSize: number,
  iconColor?: string,
  padding: number,
  borderColor: string,
  backgroundColor: string,
  disabled: boolean,
}

const attrs = useAttrs();
const props = withDefaults(defineProps<IconProps>(), {
  iconSize: 20,
  padding: 5,
  borderColor: '#DEDEDE',
  backgroundColor: '#F6F6F6',
  disabled: false,
});

const classes = computed(() => ({
  'cursor-pointer': !props.disabled,
  'cursor-not-allowed': props.disabled,
  'opacity-50': props.disabled,
}));

const style = computed(() => ({
  width: `${props.iconSize + props.padding * 2}px`,
  height: `${props.iconSize + props.padding * 2}px`,
  borderColor: props.borderColor,
  backgroundColor: props.backgroundColor,
}));

</script>

<style lang="scss" scoped>
.icon-button {
  display: inline-flex;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  &__icon {
    margin: auto;
  }
  &[flat] {
    border: none;
  }
}
</style>
