import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TemplateComponent } from './template/template.component';
import { TemplatePipePipe } from './template-pipe.pipe';
import { PicImportComponent } from './pic-import/pic-import.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { HighlightDirective } from './event-listener-practice/event-listener.directive'
import { EventListener } from './event-listener-practice/event-listeners.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TemplateComponent,
    TemplatePipePipe,
    PicImportComponent,
    ButtonComponentComponent,
    HighlightDirective,
    EventListener,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
