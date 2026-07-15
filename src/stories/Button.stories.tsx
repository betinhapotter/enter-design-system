import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'brand', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'icon'] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Pressione Enter' } };
export const Brand: Story = { args: { variant: 'brand', children: 'Pressione Enter' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secundário' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost' } };
export const Destructive: Story = { args: { variant: 'destructive', children: 'Excluir' } };
