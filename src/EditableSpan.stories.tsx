import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from './Task';
import {EditableSpan, EditableSpanPropsType} from './EditableSpan';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLISTS/EditableSpan',
    component: EditableSpan,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        onChange: {
            description: 'Value of EditableSpan changed',
            action: 'clicked'
        }
    },
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;



export const EditableSpanStory: Story = {
   args: {
    value: 'Hello',
   }
}


