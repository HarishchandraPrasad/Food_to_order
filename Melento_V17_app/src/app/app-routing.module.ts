import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AdminGuard } from './guards/adminguard';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { ViewRestaurantsComponent } from './component/restaurants/view-restaurants/view-restaurants.component';
import { CartComponent } from './component/cart/cart.component';
import { UsersviewComponent } from './component/users/usersview/usersview.component';
import { OutputExampleComponent } from './component/output-example/output-example.component';
import { ErrormessageComponent } from './component/errormessage/errormessage.component';
import { DishesComponent } from './component/dishes/dishes.component';
import { RestaurantOwnerComponent } from './component/restaurant-owner/restaurant-owner.component';
import { RestaurantOwnerGuard } from './guards/restaurant-ownerguard';
import { CourseComponent } from './component/course/course.component';
import { JsontoexcelComponent } from './component/jsontoexcel/jsontoexcel.component';

const routes: Routes = [
  {path:'contactUs',component:ContactsComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AdminGuard]},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'users/:id',component:UserDetailsComponent,canActivate:[AdminGuard]},
  {path:'jsontoexcel',component:JsontoexcelComponent},
  {path:'restaurants/:id',component:DishesComponent},
  {path:'cartView',component:CartComponent},
  {path:'course',component:CourseComponent},
  {path:'output',component:OutputExampleComponent},
  {path:'owner',component:RestaurantOwnerComponent,canActivate:[RestaurantOwnerGuard]},
  {path:'**',component:ErrormessageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{enableTracing:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
