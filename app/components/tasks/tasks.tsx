import styles from './tasks.module.css';
import { Priority, Task } from '../../lib/tasks-definition';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const Tasks = ({ task, onToggle, onDelete}: TaskItemProps) => {
  const isOverdue =
    task.dueDate && !task.completed && task.dueDate < new Date();

  const priorityClass: Record<Priority, string> = {
    low:    styles.priorityLow,
    medium: styles.priorityMedium,
    high:   styles.priorityHigh,
    urgent: styles.priorityUrgent,
  };

  return (
    <div className={styles.card}>
      <input className={styles.checkbox}
        type='checkbox'
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <div>
        <p className={styles.name}>{task.name}</p>
        <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'0.3rem' }}>
          {task.dueDate && (
            <span className={`${styles.dueBadge} ${isOverdue ? styles.dueBadgeOverdue : ''}`}>
              {formatDate(task.dueDate)}
            </span>
          )}
          <span className={`${styles.priority} ${priorityClass[task.priority]}`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
      </div>
      <div className={styles.deleteButton}>
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-300 hover:text-red-500 transition-colors text-lg leading-none"
          aria-label="Delete task"
          >
          x
        </button>
      </div>
    </div>
  )
}

export default Tasks;