import { Component, OnInit, Type, ComponentRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DialogService } from '../dialog.service';
import { Observable, Subject } from 'rxjs';
import { DialogDirective } from '../dialog.directive';
import { TestComponent } from 'src/app/test/test.component';
import { ComponentType } from '@angular/core/src/render3';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  childComponentType: Type<any>;
  @ViewChild(DialogDirective) appDialog:DialogDirective;
  private readonly _onClose = new Subject<any>();
  public onClose$ = this._onClose.asObservable();  

  ngOnInit() {
    this.loadComponent(TestComponent);
  }
  loadComponent(componentType: Type<any>) {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.appDialog.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
  onClose(){
   this._onClose.next();}

}
