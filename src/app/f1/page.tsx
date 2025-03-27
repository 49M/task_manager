"use client"
import React from 'react'
import { useState } from 'react'
import AddEntryBtn from '@/components/AddEntryBtn';
import InputField from '@/components/InputField';


const goals = [
    {
        task: "Make a large scale positive impact in society",
        priority: "high", 
        date_set: "Day 0"
    },
    {
        task: "Do fulfilling work and never stop learning",
        priority: "high",
        date_set: "Day 0"
    },
    {
        task: "Visit 50 countries",
        priority: "medium",
        date_set: "Day 2"
    }
];

 const Form1 = () => {
    const [taskInputs, setTaskInputs] = useState<number[]>([]);
    const [taskCount, setTaskCount] = useState(0);

    const priorities = goals.filter(goal => goal.priority === "high");
    const listed = priorities.map((goal) =>
        <li key={goal.task}>
            • {goal.task}
        </li>
    )
    const unordered = <ul>{listed}</ul>

    const incrementTaskCt = () => {
        setTaskCount(taskCount + 1)
    }

    const tasks = taskInputs.map(task => (
        <div key={task} className='flex flex-row justify-between space-x-2 p-2'>
            <InputField />
            <InputField />
            <InputField />
        </div>
    ));

    const addInputField = () => {
        incrementTaskCt();
        setTaskInputs([...taskInputs, taskCount])
    }

    return (
        <div>
            <div className='mt-20 ml-40'>
                <AddEntryBtn onClick={addInputField} />
            </div>
            <div className="h-[50vh] w-full items-center justify-center flex flex-col">
                <div className='flex flex-col'>
                    {/* <InputField />
                    <InputField />
                    <InputField /> */}
                    {tasks}
                </div>
                {unordered}
            </div>
        </div>
    )
}

export default Form1;

