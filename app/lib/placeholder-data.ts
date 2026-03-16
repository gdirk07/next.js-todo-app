import { Task } from "./tasks-definition";

const placeholderTasks: Task[] = [
  {
    id: '1',
    name: 'create todo app',
    priority: 'high',
    dateCreated: new Date("2025-12-27"),
    dueDate: new Date("2026-02-15"),
    completed: true,
  },
  {
    id: '2',
    name: 'clean appartment',
    priority: 'low',
    dateCreated: new Date('2026-02-01'),
    dueDate: new Date('2026-02-1'),
    completed: true,
  },
  {
    id: '3',
    name: 'interview',
    priority: 'urgent',
    dateCreated: new Date('2026-02-02'),
    dueDate: new Date('2026-02-04'),
    completed: false,
  }
];

export default placeholderTasks;