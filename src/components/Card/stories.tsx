import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '400px' }}>
    <Card />
  </div>
)
