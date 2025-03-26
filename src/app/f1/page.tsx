
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
    const listed = priorities.map((goal) => (
        <li key={goal.task}>
            • {goal.task}
        </li>
        ) 
    )
    const unordered = <ul>{listed}</ul>

    return (
        <div className="h-[80vh] w-full items-center justify-center flex">
            {unordered}
        </div>
    )
}

export default Form1;

