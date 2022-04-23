import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlgoListComponent } from './algo-list/algo-list.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BubbleSortVisualizerComponent } from './bubble-sort-visualizer/bubble-sort-visualizer.component';
import { VisulizerBoardComponent } from './visulizer-board/visulizer-board.component';


const routes : Routes=[{
  path : '',
  component : AlgoListComponent
},
{
  path : "bubble-sort",
  component : BubbleSortVisualizerComponent
}

]

@NgModule({
  declarations: [AlgoListComponent,BubbleSortVisualizerComponent, VisulizerBoardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class AppAlgoModule { }
