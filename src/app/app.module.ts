import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VisualComponent } from './components/visual/visual.component';
import { ButtonComponent } from './components/button/button.component';
import { OptionsAccessorizeComponent } from './components/options-accessorize/options-accessorize.component';
import { OptionsStyleComponent } from './components/options-style/options-style.component';
import { ButtonDownloadComponent } from './components/button-download/button-download.component';
import { ButtonRandomComponent } from './components/button-random/button-random.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualComponent,
    ButtonComponent,
    OptionsAccessorizeComponent,
    OptionsStyleComponent,
    ButtonDownloadComponent,
    ButtonRandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
