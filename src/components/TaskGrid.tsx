import React from "react"

type Task = {
    date_added: string;
    status: string;
}

interface TaskGridProps {
    tasks: Record<string, Task>;
}

const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
    return (
        <div className={"grid grid-cols-3 border"}>
            <div className={"font-bold border-b border-r p-4"}>Date Added</div>
            <div className={"font-bold border-b border-r p-4"}>Task</div>
            <div className={"font-bold border-b border-r p-4"}>Status</div>
            {Object.entries(tasks).map(([taskName, { date_added, status }]) => (
                <React.Fragment key={taskName}>
                    <div className={"border-b border-r p-4"}>{date_added}</div>
                    <div className={"border-b border-r p-4"}>{taskName}</div>
                    <div className={"border-b border-r p-4"}>{status}</div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default TaskGrid;
