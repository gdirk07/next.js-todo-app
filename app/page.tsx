'use client';
import { useState } from 'react';
import { Priority, Task } from './lib/tasks-definition';
import TaskCreator from './components/task-creator/task-creator';
import TaskList from './components/task-list/task-list';
import placeholderTasks from './lib/placeholder-data'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(placeholderTasks);

  const handleAddTask = (
    name: string, 
    priority: Priority, 
    dueDate: Date | null
  ) => {
    const newTask: Task = {
      id: Math.random().toString(),
      name,
      priority,
      dateCreated: new Date(),
      dueDate,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
    <TaskCreator onAddTask={handleAddTask} />
    <TaskList 
      tasks={tasks}
      onToggleTask={handleToggleTask}
      onDeleteTask={handleDeleteTask}
    />
    </div>
  );
}
