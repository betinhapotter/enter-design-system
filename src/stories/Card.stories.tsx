import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components';

const meta: Meta<typeof Card> = { title: 'Components/Card', component: Card };
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="font-medium mb-2">Landing Page</h3>
        <p className="text-muted-foreground">Gere um site completo a partir de um prompt.</p>
      </>
    ),
  },
};
