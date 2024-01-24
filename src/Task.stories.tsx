import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import TextField from '@mui/material/TextField/TextField';
import {IconButton} from '@mui/material';
import {AddBox} from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import {Task} from './Task';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLISTS/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        changeTaskStatus: {
            description: 'Change Task Status',
            action: 'clicked'
        },
        changeTaskTitle: {
            description: 'Change Task Title',
            action: 'clicked'
        },
        removeTask: {
            description: 'Remove Task',
            action: 'clicked'
        },
    },
    args: {
        todolistId: '123456789'
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskIsDoneStory: Story = {
    args: {
        task: {id: 'qwerty', isDone: true, title: 'JS'},
    }
}
export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: 'qwerty123', isDone: false, title: 'JS'},
    }
}

 const TaskToggle = () => {
    const [task,setTask] = useState({id: 'qwerty', isDone: false, title: 'JS'})
    function changeTaskStatus() {
        setTask({...task,isDone: !task.isDone})
    }

    function changeTaskTitle(taskId: string, title: string) {
        setTask({...task,title: title})
    }


    return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={action('remove task')} task={task} todolistId={'123456789'}/>
}

export const TaskToggleStory: Story = {
    render: () => <TaskToggle/>
}