import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotableComponent } from './components/quotable/quotable.component';
import { ShipperComponent } from './components/shipper/shipper.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/quotable' },
  { path: 'quotable', component: QuotableComponent },
  { path: 'shipper', component: ShipperComponent },
  { path: '*', redirectTo: '/quotable' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
