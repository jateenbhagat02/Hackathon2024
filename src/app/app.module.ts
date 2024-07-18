import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoPuzzleComponent } from './components/photo-puzzle/photo-puzzle.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoPuzzleComponent,
    RegisterationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';


// @NgModule({
//   imports: [BrowserModule, FormsModule],
//   declarations: [AppComponent, HelloComponent, NumberPuzzleGameComponent],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


