import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from './Icon.vue';
import iconClose from '../assets/icon/Close.svg';

const meta = {
  title: 'LZ1991-Base/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIcon: Story = {
  args: {
    src: iconClose,
  },
};
