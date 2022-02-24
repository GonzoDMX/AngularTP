import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();    // this.ticket.archived = !this.ticket.archived;n> = new EventEmitter<boolean>();

  @Output()
  ticketIsArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output()
  ticketIsDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketIsArchived.emit(this.ticket);
  }

  deleteTicket(ticket: Ticket) {
    console.log('ticket: ', this.ticket);
    this.ticketIsDeleted.emit(this.ticket);
  }
}
