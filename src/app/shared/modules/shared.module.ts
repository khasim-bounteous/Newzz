import { NgModule,isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NewzEffect } from '../store/news/News.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from '../global/App.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([NewzEffect]),
  ],

})
export class SharedModule { }
