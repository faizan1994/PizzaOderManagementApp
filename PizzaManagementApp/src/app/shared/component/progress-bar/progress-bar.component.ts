import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  constructor() { }
  public orderStatus ;
// taking input from parent and setting the status
  @Input() 
  set status(value){
    this.orderStatus = value;
  }
  get status(){
    return this.orderStatus;
  }
  
  name = 'Progress Bar';
  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","Being Prepared","Ready to serve"];

  ngOnInit(): void {
  }

}
