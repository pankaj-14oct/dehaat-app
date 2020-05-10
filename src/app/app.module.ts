import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { PersonComponent } from './components/directory/person/person.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './filters/filter.pipe';
import { OrderByPipe } from './filters/order-by.pipe';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    PersonComponent,
    HeaderComponent,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
