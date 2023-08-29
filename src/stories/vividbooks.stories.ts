import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

import { TimeIntervalComponent } from "../app/components/time-interval/time-interval.component";
// import TimeIntervalComponent from "./button.component";
import { FormsModule } from '@angular/forms';



const meta: Meta<TimeIntervalComponent> = {
  title: 'vividbooks/Page',
  component: TimeIntervalComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<TimeIntervalComponent>;

export const twoTime123000: Story = {
  render: (args: TimeIntervalComponent) => ({
    props: { time: 123000 },
  }),
};

export const oneTime123: Story = {
  render: (args: TimeIntervalComponent) => ({
    props: { time: 123 },
  }),
};
