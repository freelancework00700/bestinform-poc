import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './pages/home/components/hero-section/hero-section.component';
import { HeaderSectionComponent } from './pages/home/components/header-section/header-section.component';
import { SearchFormComponent } from './pages/home/components/hero-section/components/search-form/search-form.component';
import { SearchTabsComponent } from './pages/home/components/hero-section/components/search-tabs/search-tabs.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, SearchTabsComponent, SearchFormComponent, HomeComponent, HeroSectionComponent, HeaderSectionComponent]
})
export class AppModule {}
