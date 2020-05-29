import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

// Services
import { SalesDataService } from './services/sales-data.service';
import { ServerService } from './services/server.service';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ServerComponent } from './server/server.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PaginationComponent,
    ServerComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    SectionHealthComponent,
    SectionOrdersComponent,
    SectionSalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    SalesDataService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
