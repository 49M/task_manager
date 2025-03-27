import React from 'react'
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
    const priorities = goals.filter(goal => goal.priority === "high");
    const listed = priorities.map((goal) =>
        <li key={goal.task}>
            • {goal.task}
        </li>
    )
    const unordered = <ul>{listed}</ul>

    return (
        <div>
            <div className='mt-20 ml-40'>
                <AddEntryBtn />
            </div>
            <div className="h-[50vh] w-full items-center justify-center flex flex-col">
                <div className='flex flex-row justify-between space-x-2 p-10 '>
                    <InputField />
                    <InputField />
                    <InputField />
                </div>
                {unordered}
            </div>
        </div>
    )
}

export default Form1;

