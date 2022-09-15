import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostlistComponent } from './post/postlist/postlist.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent 
  },
  {
    path:'counter',
    component:CounterComponent 
  },
  {
    path:'posts',
    component:PostlistComponent,
    children:[
      {
        path: 'add-post', component:AddPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
