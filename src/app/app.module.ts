import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TemplateComponent } from './template/template.component';
import { TemplatePipePipe } from './template-pipe.pipe';
import { PicImportComponent } from './pic-import/pic-import.component';
import { ButtonComponentComponent } from './button-component/button-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TemplateComponent,
    TemplatePipePipe,
    PicImportComponent,
    ButtonComponentComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
