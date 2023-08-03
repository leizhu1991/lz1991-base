import type { Meta, StoryObj } from '@storybook/vue3';

import IconButton from './IconButton.vue';
import iconClose from '../assets/icon/Close.svg';

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconButton: Story = {
  args: {
    icon: iconClose,
  },
};
