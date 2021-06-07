import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CanvasComponent } from './mainpage/canvas/canvas.component';
import { InputsComponent } from './mainpage/inputs/inputs.component';
import { CanvasBorderDirective } from './mainpage/canvas.directive';
import { SharedModule } from './shared/shared.module';
import { CanvaspositionoptionsComponent } from './mainpage/canvas/canvaspositionoptions/canvaspositionoptions.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CanvasComponent,
    InputsComponent,
    CanvasBorderDirective,
    CanvaspositionoptionsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
