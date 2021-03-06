import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreHomeComponent} from "./components/landing_part/pre-home/pre-home.component";
import {HomeComponent} from "./components/landing_part/home/home.component";
import {ComparisonComponent} from "./components/comparison_part/comparison/comparison.component";
import { ConfigComparisonComponent } from './components/comparison_part/config-comparison/config-comparison.component';
import {ConfigVariationsComparisonComponent} from "./components/comparison_part/config-variations-comparison/config-variations-comparison.component";
import {ResultsComponent} from "./components/results_part/results/results.component";
import {ConfigReferencesComponent} from "./components/references_part/config-references/config-references.component";
import {MeasureComponent} from "./components/measures_part/measure/measure.component";
import {ResultsMeasureComponent} from "./components/results_part/results-measure/results-measure.component";
import {FormConfigPeriodsComponent} from "./components/core/base/form-config-periods/form-config-periods.component";

const routes: Routes = [
  /**
   * pre-home : page to select the first options
   * home : page to select the mode that we will use
   * first mode ->
   *    comparison : page to select and load data for an app
   *    form-config-periods : page to config periods to compare
   *    config-variations-comparison : page to configure variations
   *    results : page to display results
   * second mode ->
   *    config-references : page to config all values that we want to compare
   *    form-config-periods : page to config periods to compare
   *    results : page to display results
   * third mode ->
   *    measure : page to start chronometer to measure precise data in a short timing
   *    results-measure : page to display charts JS associated with different colors  for each actions
   *
   * ** 404 not found page
   */
  { path: '', component: PreHomeComponent },
  { path: 'pre-home', component: PreHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'comparison', component: ComparisonComponent },
  { path: 'config-comparison', component: ConfigComparisonComponent },
  { path: 'config-variations-comparison', component: ConfigVariationsComparisonComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'config-references', component: ConfigReferencesComponent },
  { path: 'measure', component: MeasureComponent },
  { path: 'results-measure', component: ResultsMeasureComponent },
  { path: 'config-periods', component: FormConfigPeriodsComponent },
  { path: '**', component: ResultsMeasureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
