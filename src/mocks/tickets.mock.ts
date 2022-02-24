import { Ticket, majors } from '../models/ticket';
import { Student } from '../models/student';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Space',
    description: 'Look at the stars',
    date: dateToday,
    student: {
      id: 1903,
      lastName: 'Johnson',
      firstName: 'Bailey'
    },
    major: majors.history,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: {
      id: 9033,
      lastName: 'Smith',
      firstName: 'Jack'
    },
    major: majors.sports,
    archived: false
  },
  {
    title: 'SI6 in Toronto',
    description: 'The honkening',
    date: dateToday,
    student: {
      id: 2874,
      lastName: 'Willoughby',
      firstName: 'Sparks'
    },
    major: majors.math,
    archived: true
  },
];
