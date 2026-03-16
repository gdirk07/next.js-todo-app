export type Priority = "low" | "medium" | "high" | "urgent";

export type Task = {
  id: string,
  name: string,
  priority: Priority,
  dateCreated: Date,
  dueDate: Date | null,
  completed: boolean,
}