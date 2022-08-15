import { TasksProps } from "../../App";

export interface TaskBoxProps {
  newTask: React.Dispatch<React.SetStateAction<TasksProps[]>>;
  tasks: TasksProps[];
}
