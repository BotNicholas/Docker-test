import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("http://localhost:1234/hello", {responseType: 'text'}).subscribe((response:any)=>this.title = response);
  }
}
