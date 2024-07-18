import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PhotoPuzzleComponent } from './components/photo-puzzle/photo-puzzle.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';
import { SearchNurseComponent } from './components/search-nurse/search-nurse.component';
import { NurseProfileComponent } from './components/nurse-profile/nurse-profile.component';
const routes: Routes = [
  { path: 'register', component: RegisterationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-nurse', component: SearchNurseComponent },
  { path: 'nurse-profile', component: NurseProfileComponent },
  { path: 'game', component: PhotoPuzzleComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    PhotoPuzzleComponent,
    RegisterationComponent,
    SearchNurseComponent,
    LoginComponent,    
    NurseProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
