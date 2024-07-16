import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './shared/modules/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { SourceHeadlinesComponent } from './components/source-headlines/source-headlines.component';
import { MaterialModule } from './shared/modules/Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadlineCardComponent } from './components/headline-card/headline-card.component';
import { WorldNewzComponent } from './components/world-newz/world-newz.component';
import { SavedArticlesComponent } from './components/saved-articles/saved-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    IndexComponent,
    ArticleCardComponent,
    HeadlinesComponent,
    SourceHeadlinesComponent,
    HeadlineCardComponent,
    WorldNewzComponent,
    SavedArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
