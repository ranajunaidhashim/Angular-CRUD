import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:"addbooks", component:BooksComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes,{
//     scrollPositionRestoration: 'enabled',
//   }),],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
