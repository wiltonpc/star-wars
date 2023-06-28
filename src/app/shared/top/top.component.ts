import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

	@Output() eventOpened: EventEmitter<boolean> = new EventEmitter();
  public opened: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  public setOpened(){
    this.opened = !this.opened;
    this.eventOpened.emit(this.opened);
  }

}
