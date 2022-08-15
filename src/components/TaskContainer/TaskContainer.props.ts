import { TasksProps } from "../../App";

export interface TaskContainerProps {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}
