import { TasksProps } from "../../App";

export interface TaskProps {
  task: TasksProps;
  tasks: TasksProps[];
  onDelete: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}
