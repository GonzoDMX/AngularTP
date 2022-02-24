import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Student } from '../../models/student';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    var addList = this.ticketList;
    addList.push(ticket);
    this.ticketList = addList;
    this.tickets$.next(addList);

  }

  archiveTicket(ticket: Ticket) {
    this.ticketList.forEach((element, index)=>{
      if(element == ticket) {
        ticket.archived = !ticket.archived;
        this.ticketList[index] = ticket;
      }
    });
    this.tickets$.next(this.ticketList);
    console.log('archive ticket: ', ticket);
  }


  deleteTicket(ticket: Ticket) {
    var listUpdate = this.ticketList.filter(function tick(ticks: Ticket) {
      return ticks != ticket;
    });
    this.ticketList = listUpdate;
    this.tickets$.next(listUpdate);
  }
}
