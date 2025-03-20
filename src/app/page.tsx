import Image from "next/image";
import React from "react";
import TaskGrid from "@/components/TaskGrid"

const Home: React.FC = () => {

    const tasks = {
        "workout": {
            date_added: new Date().getDate().toString(),
            status: "Incomplete"
        },
        "coding": {
            date_added: new Date().getDate().toString(),
            status: "In Progress"
        },
        "sleep 8 hours": {
            date_added: new Date().getDate().toString(),
            status: "Complete"
        }
    }

  return (
    <div className="items-center justify-items-center min-h-screen min-w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          <TaskGrid tasks={tasks} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

export default Home;