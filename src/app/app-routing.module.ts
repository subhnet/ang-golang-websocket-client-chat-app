import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';

const routes: Routes = [

  { path: 'chat-page', component: ChatBoxComponent },
  {
    path: '',
    redirectTo: '/chat-page',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
