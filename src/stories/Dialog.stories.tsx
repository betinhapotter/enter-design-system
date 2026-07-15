import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog, Button } from '../components';

const meta: Meta = { title: 'Components/Dialog' };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <h3 className="text-lg font-medium mb-2">Confirmar</h3>
          <p className="text-sm opacity-70">Isso vai criar um novo projeto.</p>
        </Dialog>
      </>
    );
  },
};
