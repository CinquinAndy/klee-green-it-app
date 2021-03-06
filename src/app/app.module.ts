import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/core/base/hero/hero.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { BaseButtonComponent } from './components/core/base/buttons/base-button/base-button.component';
import { PreHomeComponent } from './components/landing_part/pre-home/pre-home.component';
import { HomeComponent } from './components/landing_part/home/home.component';
import { ErrorNotFoundComponent } from './components/core/error-not-found/error-not-found.component';
import { ComparisonComponent } from './components/comparison_part/comparison/comparison.component';
import { LoaderComponent } from './components/core/loader/loader.component';
import { ConfigComparisonComponent } from './components/comparison_part/config-comparison/config-comparison.component';
import { ResultsComponent } from './components/results_part/results/results.component';
import { ConfigReferencesComponent } from './components/references_part/config-references/config-references.component';
import { MeasureComponent } from './components/measures_part/measure/measure.component';
import { ResultsMeasureComponent } from './components/results_part/results-measure/results-measure.component';
import { ConfigVariationsComparisonComponent } from './components/comparison_part/config-variations-comparison/config-variations-comparison.component';
import { ReplaceStarsForSpansPipe } from './pipes/replace-stars-for-spans.pipe';
import { HeroAlternativeSelectComponent } from './components/core/base/hero/hero-alternative-select/hero-alternative-select.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GetListAppService} from "./services/CallAPI/get-list-app.service";
import {HttpErrorHandler} from "./services/http-error-handler.service";
import {PostAppNameService} from "./services/CallAPI/post-app-name.service";
import { FormConfigReferencesComponent } from './components/references_part/config-references/form-config-references/form-config-references.component';
import { FormConfigPeriodsComponent } from './components/core/base/form-config-periods/form-config-periods.component';
import { FormatDatetimelocalPipe } from './pipes/format-datetimelocal.pipe';

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
    HeroAlternativeSelectComponent,
    FormConfigReferencesComponent,
    FormConfigPeriodsComponent,
    FormatDatetimelocalPipe
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
