import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentService } from './services/http/student.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
    
  ],

  providers:[StudentService],
  exports:[
    HeaderComponent, 
    FooterComponent

  ]
})
export class CoreModule { }
