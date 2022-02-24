import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public displayArchived: boolean = true;

  public ticketList: Ticket[] = [];

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket);
  }

  toggleArchived(element) {
    this.displayArchived = !this.displayArchived;
    if (this.displayArchived) {
      element.textContent = "Hide Archived";
    } else {
      element.textContent = "Show Archived";
    }
    console.log("Archived: ", this.displayArchived);
  }

}
