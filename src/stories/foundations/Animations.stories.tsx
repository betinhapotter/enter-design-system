import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta = { title: 'Foundations/Animations' };
export default meta;
type Story = StoryObj;

const ANIMS = [
  'animate-in fade-in-0',
  'animate-in fade-in-0 zoom-in-95',
  'animate-in slide-in-from-bottom-4',
  'animate-in slide-in-from-top-4',
  'animate-in fade-in-0 blur-in',
  'animate-in zoom-in-95 blur-in slide-in-from-bottom-2',
];

export const EnterUtilities: Story = {
  render: () => {
    const [k, setK] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button
          onClick={() => setK((v) => v + 1)}
          style={{ alignSelf: 'flex-start', padding: '8px 14px', borderRadius: 10, background: '#fb88ad', color: '#450a1b', border: 0, fontWeight: 600, cursor: 'pointer' }}
        >
          Replay ▶
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {ANIMS.map((cls) => (
            <div key={cls + k} className={cls}>
              <div style={{ height: 100, borderRadius: 12, background: '#131316', color: '#fafafa', display: 'grid', placeItems: 'center', fontSize: 11, fontFamily: 'monospace', padding: 8, textAlign: 'center' }}>
                {cls}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, opacity: 0.6 }}>
          Easing padrão: cubic-bezier(0, 0, 0.2, 1) · duração base 400ms
        </p>
      </div>
    );
  },
};
