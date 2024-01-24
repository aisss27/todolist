import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {action} from '@storybook/addon-actions';
import AppWithRedux from './AppWithRedux';
import {ReduxStoreProviderDecorator} from './state/ReduxStoreProviderDecorator';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    decorators: [ReduxStoreProviderDecorator]
};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;



export const AppWithReduxStory: Story = {
render: () => <AppWithRedux/>
}


