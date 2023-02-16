import { Meta, Story } from '@storybook/angular/types-6-0';
import MyLabel from './my-label.component';

export default {
  title: 'Example/MyLabel',
  component: MyLabel,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    }
  }
} as Meta;

const Template: Story<MyLabel> = (args: MyLabel) => ({
  props: args
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

// Primary.args = {
//   label: 'Label text',
//   type: 'text-primary',
//   size: 'normal'
// }
