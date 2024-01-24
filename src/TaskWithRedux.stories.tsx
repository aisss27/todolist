import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ReduxStoreProviderDecorator} from './state/ReduxStoreProviderDecorator';
import {useSelector} from 'react-redux';
import {AppRootStateType, store} from './state/store';
import {TaskType} from './Todolist';
import {v1} from 'uuid';
import {TaskWithRedux} from './TaskWithRedux';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLISTS/TaskWithRedux',
    component: TaskWithRedux,
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
type Story = StoryObj<typeof TaskWithRedux>;

const Task = () => {
    let task = useSelector<AppRootStateType,TaskType>(state => state.tasks['todolistId1'][0])
    if(!task) task = {id: v1(), title: "DEFAULT TASK", isDone: false}
    return <TaskWithRedux task={task} todolistId={'todolistId1'}/>
}

export const TaskWithReduxStory: Story = {
render: () => <Task/>
}


