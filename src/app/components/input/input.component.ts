import { Component, OnInit } from '@angular/core';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  url : string = "";
  selectedFile : any;

  constructor(private inputService : InputService) { }
  

  ngOnInit(): void {
  }

  onUpload(event : any) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      let fileJson = JSON.parse(fileReader.result as string)
      this.inputService.updateData(fileJson.data)
      console.log(fileJson)
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  fetch () {
    this.inputService.getDataFromUrl(this.url);
  }
}
