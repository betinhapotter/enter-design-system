import type { Meta, StoryObj } from '@storybook/react';
import { PromptInput } from '../components';

const meta: Meta = { title: 'Components/PromptInput' };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ width: 420 }}>
      <PromptInput />
    </div>
  ),
};
