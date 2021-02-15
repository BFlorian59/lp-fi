import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    
    
  ],
  exports:[
    HeaderComponent, 
    FooterComponent

  ]
})
export class CoreModule { }
