import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alertdialog',
  templateUrl: './alertdialog.component.html',
  styleUrls: ['./alertdialog.component.scss']
})
export class AlertdialogComponent implements OnInit {

  @Input() message: string;
  @Output() closeDialogEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeDialog() {
    this.closeDialogEmitter.emit('Closed');
  }
}
