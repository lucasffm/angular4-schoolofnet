import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuiModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
