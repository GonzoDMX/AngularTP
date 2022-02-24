import { Student } from '../models/student';

export enum majors {
  math = "Math",
  science = "Science",
  history = "History",
  sports = "Sports"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: majors;
  archived?: boolean;
}
