import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './filter/list/list.component';

@NgModule({
  declarations: [AppComponent, FilterComponent, ListComponent],
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
