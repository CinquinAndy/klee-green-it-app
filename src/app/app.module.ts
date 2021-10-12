import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/base/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseButtonComponent } from './components/buttons/base-button/base-button.component';
import { PreHomeComponent } from './components/pre-home/pre-home.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfigComparisonComponent } from './components/config-comparison/config-comparison.component';
import { ResultsComponent } from './components/results/results.component';
import { ConfigReferencesComponent } from './components/config-references/config-references.component';
import { MeasureComponent } from './components/measure/measure.component';
import { ResultsMeasureComponent } from './components/results-measure/results-measure.component';
import { ConfigVariationsComparisonComponent } from './components/config-variations-comparison/config-variations-comparison.component';
import { ReplaceStarsForSpansPipe } from './pipes/replace-stars-for-spans.pipe';
import { HeroAlternativeSelectComponent } from './components/base/hero/hero-alternative-select/hero-alternative-select.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GetListAppService} from "./services/CallAPI/get-list-app.service";
import {HttpErrorHandler} from "./services/http-error-handler.service";
import {PostAppNameService} from "./services/CallAPI/post-app-name.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    HeaderComponent,
    BaseButtonComponent,
    PreHomeComponent,
    HomeComponent,
    ErrorNotFoundComponent,
    ComparisonComponent,
    LoaderComponent,
    ConfigComparisonComponent,
    ResultsComponent,
    ConfigReferencesComponent,
    MeasureComponent,
    ResultsMeasureComponent,
    ConfigVariationsComparisonComponent,
    ReplaceStarsForSpansPipe,
    HeroAlternativeSelectComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    HttpErrorHandler,
    GetListAppService,
    PostAppNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
