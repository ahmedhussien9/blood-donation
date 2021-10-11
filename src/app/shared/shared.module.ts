// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Modules
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialImportsModule } from './material-imports/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pipes
import { TranslatePipe } from './pipes/translates.pipe';
import { TranslateApiPipe } from './pipes/translateApi.pipe';

// Angular material
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

// Components
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { FilterSelectBoxComponent } from './components/filter-select-box/filter-select-box.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MosquesCapacityProgressComponent } from './components/mosques-capacity-progress/mosques-capacity-progress.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MosquesUpdatesComponent } from './components/mosques-updates/mosques-updates.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { GroupBarChartComponent } from './components/group-bar-chart/group-bar-chart.component';
import { SwitchBoxComponent } from './components/switch-box/switch-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { UploadFileDetailsComponent } from './components/upload-file-details/upload-file-details.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { StatusTagComponent } from './components/status-tag/status-tag.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel =
    localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') === 'en'
      ? 'items per page'
      : 'عناصر لكل صفحة';
  return customPaginatorIntl;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    MaterialImportsModule,
    
    ScrollingModule,
    HttpClientModule,
    TranslateModule,
    RoundProgressModule,
    NgbModule,
    NgxFileDropModule,
    NgxPaginationModule,
    ChartsModule,
  ],
  declarations: [
    // directives
    //Pipes
    TranslatePipe,
    TranslateApiPipe,
    // Components
    MosquesCapacityProgressComponent,
    SubmitBtnComponent,
    SubHeaderComponent,
    ButtonIconComponent,
    RoundButtonComponent,
    FilterSelectBoxComponent,
    GroupBarChartComponent,
    LoaderComponent,
    MosquesUpdatesComponent,
    DoughnutChartComponent,
    SwitchBoxComponent,
    FooterComponent,
    EmptyDataComponent,
    StatusTagComponent,
    ActionButtonComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    MaterialImportsModule,
    HttpClientModule,
    TranslateModule,
    ScrollingModule,
    RoundProgressModule,
    NgxFileDropModule,
    NgxPaginationModule,
    // directives
    //Pipes
    TranslatePipe,
    TranslateApiPipe,
    // Components
    MosquesCapacityProgressComponent,
    SubmitBtnComponent,
    SubHeaderComponent,
    ButtonIconComponent,
    RoundButtonComponent,
    FilterSelectBoxComponent,
    LoaderComponent,
    MosquesUpdatesComponent,
    DoughnutChartComponent,
    GroupBarChartComponent,
    SwitchBoxComponent,
    FooterComponent,
    EmptyDataComponent,
    StatusTagComponent,
    ActionButtonComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    DatePipe,
  ],
})
export class SharedModule { }
