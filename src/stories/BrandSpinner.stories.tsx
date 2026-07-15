import type { Meta, StoryObj } from '@storybook/react';
import { BrandSpinner } from '../components';

const meta: Meta<typeof BrandSpinner> = { title: 'Components/BrandSpinner', component: BrandSpinner };
export default meta;
type Story = StoryObj<typeof BrandSpinner>;

export const Default: Story = { args: {} };
export const Large: Story = { args: { className: 'size-10' } };
