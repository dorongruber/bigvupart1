import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TitlecolpositionDirective } from './titlecolposition.directive';
import { TitlecontainerpositionDirective } from './titlecontainerposition.directive';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    TitlecontainerpositionDirective,
    TitlecolpositionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    TitlecontainerpositionDirective,
    TitlecolpositionDirective
  ]
})
export class SharedModule {}
