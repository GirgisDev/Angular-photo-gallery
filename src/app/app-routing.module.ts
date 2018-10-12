import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserPhotosComponent } from './components/user-photos/user-photos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserPhotosComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}