import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TemplateComponent } from './template/template.component';
import { TemplatePipePipe } from './template-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TemplateComponent,
    TemplatePipePipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
