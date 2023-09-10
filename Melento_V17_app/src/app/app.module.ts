import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ManualComponent } from './component/manualcomponent/manualcomponent.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { DishesComponent } from './component/dishes/dishes.component';
import { UsersviewComponent } from './component/users/usersview/usersview.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminGuard } from './guards/adminguard';
import { FormsComponent } from './component/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './component/sign/sign.component';
import { DemoReactiveFormComponent } from './component/demo-reactive-form/demo-reactive-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { CustomValidationComponent } from './component/custom-validation/custom-validation.component';

import { UserDetailsComponent } from './component/user-details/user-details.component';
import { AddRestaurantsComponent } from './component/restaurants/add-restaurants/add-restaurants.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';



import {MatToolbarModule} from '@angular/material/toolbar';

import {MatExpansionModule} from '@angular/material/expansion';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewRestaurantsComponent } from './component/restaurants/view-restaurants/view-restaurants.component';
import { UpdateRestaurantsComponent } from './component/restaurants/update-restaurants/update-restaurants.component';
import { AddUserComponent } from './component/users/add-user/add-user.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ViewOrdersComponent } from './component/orders/view-orders/view-orders.component';
import { AddOrdersComponent } from './component/orders/add-orders/add-orders.component';
import { UpdateOrdersComponent } from './component/orders/update-orders/update-orders.component';
import { OutputExampleComponent, SingleComponent } from './component/output-example/output-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OpacityDirective } from './directives/opacity.directive';
import { PipeExampleComponent } from './component/pipe-example/pipe-example.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { ErrormessageComponent } from './component/errormessage/errormessage.component';
import { UserUpdateComponent } from './component/users/user-update/user-update.component';
import { RestaurantOwnerComponent } from './component/restaurant-owner/restaurant-owner.component';
import { GreyDishDirective } from './directives/grey-dish.directive';
import { ViewOwnerRestaurantComponent } from './component/restaurant-owner/view-owner-restaurant/view-owner-restaurant.component';
import { AddOwnerRestaurantComponent } from './component/restaurant-owner/add-owner-restaurant/add-owner-restaurant.component';
import { UpdateOwnerRestaurantComponent } from './component/restaurant-owner/update-owner-restaurant/update-owner-restaurant.component';
import { RestaurantOwnerGuard } from './guards/restaurant-ownerguard';
import { CourseComponent } from './component/course/course.component';
import { JsontoexcelComponent } from './component/jsontoexcel/jsontoexcel.component';





@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    ManualComponent,
    RestaurantsComponent,
    DishesComponent,
    UsersviewComponent,
    ContactsComponent,
    HomeComponent,
    AdminComponent,
    AboutUsComponent,
    FormsComponent,
    SignComponent,
    DemoReactiveFormComponent,
    RegisterFormComponent,
    CustomValidationComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    AddRestaurantsComponent,
    CartComponent,
    ViewRestaurantsComponent,
    UpdateRestaurantsComponent,
    AddUserComponent,
    OrdersComponent,
    ViewOrdersComponent,
    AddOrdersComponent,
    UpdateOrdersComponent,
    OutputExampleComponent,
    SingleComponent,
    HighlightDirective,
    OpacityDirective,
    PipeExampleComponent,
    ExponentialStrengthPipe,
    ErrormessageComponent,
    RestaurantOwnerComponent,
    GreyDishDirective,
    ViewOwnerRestaurantComponent,
    AddOwnerRestaurantComponent,
    UpdateOwnerRestaurantComponent,
    CourseComponent,
    JsontoexcelComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    
    
    MatFormFieldModule,
    MatInputModule,
    
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [AdminGuard,RestaurantOwnerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
