import { ProfileComponent } from './component/profile/profile.component';
import { CartComponent } from './component/cart/cart.component';
import { MyshopComponent } from './component/myshop/myshop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'myshop',component:MyshopComponent },
  { path:'',component:MyshopComponent },
  { path:'cart',component:CartComponent},
  { path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
