import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

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
    SavedArticlesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
