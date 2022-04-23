import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visulizer-board',
  templateUrl: './visulizer-board.component.html',
  styleUrls: ['./visulizer-board.component.scss']
})
export class VisulizerBoardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("algo-list")
  }
}
