import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.component';
import { ButtonComponent } from './components/button.component';
import { MyStudy } from './components/study.component';
import { EntryDataComponent} from './components/entry.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MenuComponent, 
    ButtonComponent, 
    MyStudy, 
    EntryDataComponent ],
  bootstrap: [AppComponent],
})
export class AppModule {}
