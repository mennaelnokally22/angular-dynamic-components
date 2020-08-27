import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule
  ],
  entryComponents:[DialogComponent]
})
export class DialogModule { }