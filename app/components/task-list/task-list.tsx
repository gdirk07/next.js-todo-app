import Tasks from "../tasks/tasks"; 
import styles from './task-list.module.css';
import { Task } from '../../lib/tasks-definition';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div>
        No tasks created
      </div>
    );
  } 
  return (
    <div className={styles.container} >
      {tasks.map((task) => {
        return(
          <div className={styles.taskitem} key={task.id.toString()}>
            <Tasks 
              task = {task}
              onToggle = {onToggleTask}
              onDelete = {onDeleteTask}
            />
          </div>
        )
      })}
    </div>
  )

}