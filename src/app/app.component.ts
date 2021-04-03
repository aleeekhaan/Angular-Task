import { Component } from '@angular/core';
import { InputService } from './services/input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task';
  data : number[] = []

  constructor(private inputService : InputService) {}
  
  ngOnInit(): void {
    this.inputService.getData()
      .subscribe(data => this.data = data)
  }
}
