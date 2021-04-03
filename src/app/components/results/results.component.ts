import { Component, Input, OnInit } from '@angular/core';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  constructor() { }

  @Input()
  data : number[] = []

  results = {
    mean : {
      text : "Mean",
      value : 1
    },
    median : {
      text : "Median",
      value : 1
    },
    mode : {
      text : "Mode",
      value : 1
    },
    stddev : {
      text : "Standard Deviation",
      value : 1
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.results.mean.value = this.mean();
    this.results.median.value = this.median();
    this.results.mode.value = this.mode();
    this.results.stddev.value = this.stddev();
  }

  mean () {
    let sum = 0;
    this.data.forEach(el => sum += el)
    return sum/this.data.length;
  }

  median () {
    if(this.data.length % 2 == 0) {
      return this.data[this.data.length/2];
    }
    else {
      return this.data[Math.ceil((((this.data.length+1)/2) + ((this.data.length-1)/2)) / 2)]
    }
  }

  mode () {
    let max = Math.max(...this.data);
    return this.data.indexOf(max);
  }

  stddev () {
    let sum = 0;
    let mean = this.mean();
    this.data.forEach(el => sum += (el+mean));
    return Math.round(Math.sqrt(sum/this.data.length))
  }
  
}
