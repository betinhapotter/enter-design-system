import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Foundations/Colors' };
export default meta;
type Story = StoryObj;

const SEMANTIC: [string, string, string][] = [
  ['background', '#ffffff', '#09090b'],
  ['foreground', '#09090b', '#fafafa'],
  ['card', '#ffffff', '#131316'],
  ['primary', '#fb88ad', '#fb88ad'],
  ['secondary', '#f4f4f5', '#27272a'],
  ['muted', '#f4f4f5', '#27272a'],
  ['accent', '#f4f4f5', '#27272a'],
  ['destructive', '#e7000b', '#ff6467'],
  ['border', '#e4e4e7', '#27272a'],
  ['ring', '#fb88ad', '#fb88ad'],
];

const ACCENTS: [string, string][] = [
  ['brand', '#fb88ad'],
  ['blue', '#3b82f6'],
  ['green', '#22c55e'],
  ['amber', '#f59e0b'],
  ['red', '#ef4444'],
  ['violet', '#8b5cf6'],
  ['cyan', '#06b6d4'],
  ['pink', '#ec4899'],
];

function Swatch({ name, light, dark }: { name: string; light: string; dark?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', height: 56, borderRadius: 10, overflow: 'hidden', border: '1px solid #e4e4e7' }}>
        <div style={{ flex: 1, background: light }} />
        {dark ? <div style={{ flex: 1, background: dark }} /> : null}
      </div>
      <div style={{ fontSize: 12, fontFamily: 'monospace' }}>
        <strong>{name}</strong>
        <div style={{ opacity: 0.6 }}>{light}{dark ? ` / ${dark}` : ''}</div>
      </div>
    </div>
  );
}

export const Semantic: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 900 }}>
      {SEMANTIC.map(([n, l, d]) => (
        <Swatch key={n} name={n} light={l} dark={d} />
      ))}
    </div>
  ),
};

export const AccentScale: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 900 }}>
      {ACCENTS.map(([n, c]) => (
        <Swatch key={n} name={n} light={c} />
      ))}
    </div>
  ),
};
