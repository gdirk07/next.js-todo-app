import { useState } from 'react';  
import styles from './task-creator.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Priority } from '../../lib/tasks-definition';

interface TaskCreatorProps {
  onAddTask: (name: string, 
  priority: Priority, 
  dueDate: Date | null) => void;
}

export default function TaskCreator({ onAddTask }: TaskCreatorProps) {
  const [inputTask, setInputTask] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [priority, setPriority] = useState<Priority>('low');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const trimmed = inputTask.trim();
    if (!trimmed) return;

    onAddTask(trimmed, priority, dueDate ? new Date(dueDate) : null);

    setInputTask("");
  };

  const handleDateChange = (date: Date | null) => {
    setDueDate(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          type='text'
          placeholder='Task name'
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          required
        />
        <DatePicker
          selected={dueDate}
          onChange={handleDateChange}
        />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
        >
          <option className={styles.selector} value='low'>low</option>
          <option className={styles.selector} value='medium'>medium</option>
          <option className={styles.selector} value='high'>high</option>
          <option className={styles.selector} value='urgent'>urgent</option>
        </select>
        <button
          type='submit'
          className={styles.button}
        >
          Add task
        </button>
      </div>
    </form>   
  );
}