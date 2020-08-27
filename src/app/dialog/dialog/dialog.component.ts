import { Component, OnInit, Type, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DialogService } from '../dialog.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }
  childComponentType: Type<any>;

  private readonly _onClose = new Subject<any>();
  public onClose$ = this._onClose.asObservable();  ngOnInit() {
  }
 onClose(){
   this._onClose.next();
 }

}
