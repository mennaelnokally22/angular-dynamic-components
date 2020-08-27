import { Injectable, ComponentRef, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, Type } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogComponentRef :ComponentRef<DialogComponent>
  constructor(private componentFactoryResolver:ComponentFactoryResolver,
    private appRef:ApplicationRef,
    private injector:Injector) { }

  appendDialogComponentToBody() {
    //to get factory of the component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    //to create an instance of the component
    const componentRef = componentFactory.create(this.injector);
    //to attach component to angular component tree
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  
    this.dialogComponentRef = componentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public open() {
  this.appendDialogComponentToBody();
  //this.dialogComponentRef.instance.childComponentType = componentType;
  this.dialogComponentRef.instance.onClose$.subscribe(()=>{
    this.removeDialogComponentFromBody();
  });
  }

}
