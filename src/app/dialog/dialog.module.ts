import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogDirective } from './dialog.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent, DialogDirective],
  exports:[DialogComponent],
  entryComponents:[DialogComponent],
})
export class DialogModule { }
