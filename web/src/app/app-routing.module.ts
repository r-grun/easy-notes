import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteCardComponent } from './note-card/note-card.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'category/:id', component: NoteCardComponent },
  { path: 'login', component: AccountComponent, data: { type: 'login' } },
  { path: 'register', component: AccountComponent, data: { type: 'register' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
