import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  teams$: Observable<any> = this.http.get('/api/teams');
  constructor(private http: HttpClient){}
  title = 'PizzaManagementApp';
}
