import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule , Routes}  from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HotdogsComponent } from './menu/hotdogs/hotdogs.component';
import { ShakesComponent } from './menu/shakes/shakes.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MhomeComponent } from './menu/mhome/mhome.component';

const routes:Routes=[
  {path:'' , component:HomeComponent },
  {path:'about' , component:AboutComponent},
  {path:'menu' , component:MenuComponent , children:[
    {path:'' , redirectTo:'mhome', pathMatch:'full'},
    {path:'mhome' , component:MhomeComponent},
    {path:'hotdogs' , component:HotdogsComponent},
    {path:'shakes' , component:ShakesComponent},
    {path:'breakfast', component:BreakfastComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'blog' , component:BlogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    BlogComponent,
    HotdogsComponent,
    ShakesComponent,
    BreakfastComponent,
    HeaderComponent,
    FooterComponent,
    MhomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
