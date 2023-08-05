import type { Meta, StoryObj } from '@storybook/vue3';

import IconButton from './IconButton.vue';
import iconClose from '../assets/icon/Close.svg';

const meta = {
  title: 'LZ1991-Base/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    colour: {
      control: 'select',
      options: ['default', 'white', 'grey'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonDefault: Story = {
  args: {
    icon: iconClose,
    colour: 'default',
  },
};
