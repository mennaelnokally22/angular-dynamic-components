import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-components';
  constructor(private dialogService: DialogService){}

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.open();
  }

}
