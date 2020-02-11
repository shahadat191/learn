import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import { TestDataComponent } from './test-data/test-data.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { ResizeDirective } from './resize.directive';
import { ResizableModule } from 'angular-resizable-element';

const routes: Routes = [
  { path: 'mora/:id',  component: TestDataComponent, pathMatch: 'full'}
];
@NgModule({
  declarations: [TestDataComponent, DataViewerComponent, ResizeDirective],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ResizableModule
  ]
})
export class PracticeModule { }
