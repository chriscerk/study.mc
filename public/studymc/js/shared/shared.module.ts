
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CapitalizePipe, TrimPipe],
  exports: [CapitalizePipe, TrimPipe, CommonModule, FormsModule, HttpModule],
  // providers: [] // these would be multi-instance
})
export class SharedModule { }