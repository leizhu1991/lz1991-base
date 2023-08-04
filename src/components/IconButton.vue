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

export interface IconProps {
  icon: string,
  iconSize: number,
  iconColor: string,
  padding: number,
  disabled: boolean,
}

const attrs = useAttrs();
const props = withDefaults(defineProps<IconProps>(), {
  iconSize: 20,
  iconColor: '#212529', // text-default
  padding: 5,
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
}));

</script>

<style lang="scss" scoped>
.icon-button {
  display: inline-flex;
  border-radius: 4px;
  transition: background-color 250ms ease-in 0s;
  &__icon {
    margin: auto;
  }
  &[theme="white"] {
    border: 1px solid $gray-2;
    background-color: $white;
    &:hover {
      background-color: $white-3;
    }
  }
  &[theme="grey"] {
    border: none;
    background-color: $white-3;
    &:hover {
      background-color: $white-2;
    }
  }
}
</style>
